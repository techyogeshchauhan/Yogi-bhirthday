
-- WISHES (guest book)
CREATE TABLE public.wishes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country TEXT,
  emoji TEXT,
  message TEXT NOT NULL,
  avatar_url TEXT,
  likes INT NOT NULL DEFAULT 0,
  pinned BOOLEAN NOT NULL DEFAULT false,
  approved BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.wishes TO anon, authenticated;
GRANT ALL ON public.wishes TO service_role;
ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "wishes_select_all" ON public.wishes FOR SELECT USING (approved = true);
CREATE POLICY "wishes_insert_all" ON public.wishes FOR INSERT WITH CHECK (true);
CREATE POLICY "wishes_update_likes" ON public.wishes FOR UPDATE USING (true) WITH CHECK (true);

-- FRIEND WALL
CREATE TABLE public.friend_wall (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  photo_url TEXT,
  memory TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.friend_wall TO anon, authenticated;
GRANT ALL ON public.friend_wall TO service_role;
ALTER TABLE public.friend_wall ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fw_select_all" ON public.friend_wall FOR SELECT USING (true);
CREATE POLICY "fw_insert_all" ON public.friend_wall FOR INSERT WITH CHECK (true);

-- MEMORY CAPSULE (sealed until birthday)
CREATE TABLE public.capsule (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  unlock_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.capsule TO anon, authenticated;
GRANT ALL ON public.capsule TO service_role;
ALTER TABLE public.capsule ENABLE ROW LEVEL SECURITY;
CREATE POLICY "capsule_insert_all" ON public.capsule FOR INSERT WITH CHECK (true);
CREATE POLICY "capsule_select_unlocked" ON public.capsule FOR SELECT USING (unlock_at <= now());

-- VISITORS
CREATE TABLE public.visitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country TEXT,
  session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.visitors TO anon, authenticated;
GRANT ALL ON public.visitors TO service_role;
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "vis_select_all" ON public.visitors FOR SELECT USING (true);
CREATE POLICY "vis_insert_all" ON public.visitors FOR INSERT WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.wishes;
ALTER PUBLICATION supabase_realtime ADD TABLE public.friend_wall;
