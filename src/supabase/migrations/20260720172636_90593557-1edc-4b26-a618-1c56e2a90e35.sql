
-- 1) WISHES: drop permissive UPDATE, add safe likes RPC
DROP POLICY IF EXISTS wishes_update_likes ON public.wishes;

CREATE OR REPLACE FUNCTION public.increment_wish_likes(_wish_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.wishes
     SET likes = likes + 1
   WHERE id = _wish_id AND approved = true
  RETURNING likes;
$$;

REVOKE ALL ON FUNCTION public.increment_wish_likes(uuid) FROM public;
GRANT EXECUTE ON FUNCTION public.increment_wish_likes(uuid) TO anon, authenticated;

-- 2) FRIEND_WALL: add moderation, hide unapproved posts
ALTER TABLE public.friend_wall
  ADD COLUMN IF NOT EXISTS approved boolean NOT NULL DEFAULT false;

DROP POLICY IF EXISTS fw_select_all ON public.friend_wall;
CREATE POLICY fw_select_approved
  ON public.friend_wall
  FOR SELECT
  TO anon, authenticated
  USING (approved = true);

-- Keep public insert but force approved=false on insert (moderation required)
DROP POLICY IF EXISTS fw_insert_all ON public.friend_wall;
CREATE POLICY fw_insert_unapproved
  ON public.friend_wall
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (approved = false);

-- 3) CAPSULE: input validation via trigger
CREATE OR REPLACE FUNCTION public.validate_capsule_entry()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.unlock_at <= now() THEN
    RAISE EXCEPTION 'unlock_at must be in the future';
  END IF;
  IF NEW.unlock_at > now() + interval '5 years' THEN
    RAISE EXCEPTION 'unlock_at cannot be more than 5 years in the future';
  END IF;
  IF length(NEW.name) < 1 OR length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'name must be 1-100 characters';
  END IF;
  IF length(NEW.message) < 1 OR length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'message must be 1-2000 characters';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_validate_capsule ON public.capsule;
CREATE TRIGGER trg_validate_capsule
  BEFORE INSERT ON public.capsule
  FOR EACH ROW EXECUTE FUNCTION public.validate_capsule_entry();

-- 4) VISITORS: hide session identifiers; expose only aggregate stats
DROP POLICY IF EXISTS vis_select_all ON public.visitors;

CREATE OR REPLACE FUNCTION public.get_visitor_stats()
RETURNS TABLE(total bigint, countries bigint)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT
    COUNT(*)::bigint AS total,
    COUNT(DISTINCT country)::bigint AS countries
  FROM public.visitors;
$$;

REVOKE ALL ON FUNCTION public.get_visitor_stats() FROM public;
GRANT EXECUTE ON FUNCTION public.get_visitor_stats() TO anon, authenticated;
