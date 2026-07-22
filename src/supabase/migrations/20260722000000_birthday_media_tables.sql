-- VIDEO MESSAGES TABLE
CREATE TABLE public.video_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration INTEGER, -- in seconds
  approved BOOLEAN NOT NULL DEFAULT false,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.video_messages TO anon, authenticated;
GRANT ALL ON public.video_messages TO service_role;
ALTER TABLE public.video_messages ENABLE ROW LEVEL SECURITY;

-- Only show approved videos
CREATE POLICY "video_select_approved" ON public.video_messages 
  FOR SELECT 
  TO anon, authenticated
  USING (approved = true);

-- Anyone can insert, but it needs approval
CREATE POLICY "video_insert_all" ON public.video_messages 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (approved = false);

-- Realtime subscription
ALTER PUBLICATION supabase_realtime ADD TABLE public.video_messages;


-- PHOTO BOOTH TABLE
CREATE TABLE public.photo_booth (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  photo_url TEXT NOT NULL,
  filter_applied TEXT,
  approved BOOLEAN NOT NULL DEFAULT false,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.photo_booth TO anon, authenticated;
GRANT ALL ON public.photo_booth TO service_role;
ALTER TABLE public.photo_booth ENABLE ROW LEVEL SECURITY;

CREATE POLICY "photo_select_approved" ON public.photo_booth 
  FOR SELECT 
  TO anon, authenticated
  USING (approved = true);

CREATE POLICY "photo_insert_all" ON public.photo_booth 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (approved = false);

ALTER PUBLICATION supabase_realtime ADD TABLE public.photo_booth;


-- POLL RESPONSES TABLE
CREATE TABLE public.poll_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  poll_id TEXT NOT NULL,
  option_id TEXT NOT NULL,
  user_identifier TEXT, -- IP hash or session ID
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(poll_id, user_identifier)
);

GRANT SELECT, INSERT ON public.poll_responses TO anon, authenticated;
GRANT ALL ON public.poll_responses TO service_role;
ALTER TABLE public.poll_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "poll_select_all" ON public.poll_responses 
  FOR SELECT 
  USING (true);

CREATE POLICY "poll_insert_all" ON public.poll_responses 
  FOR INSERT 
  WITH CHECK (true);


-- QUIZ RESPONSES TABLE
CREATE TABLE public.quiz_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  percentage NUMERIC(5,2),
  time_taken INTEGER, -- in seconds
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.quiz_responses TO anon, authenticated;
GRANT ALL ON public.quiz_responses TO service_role;
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "quiz_select_all" ON public.quiz_responses 
  FOR SELECT 
  USING (true);

CREATE POLICY "quiz_insert_all" ON public.quiz_responses 
  FOR INSERT 
  WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_responses;


-- AI GENERATED WISHES TABLE
CREATE TABLE public.ai_wishes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  wish_text TEXT NOT NULL,
  tone TEXT, -- funny, heartfelt, poetic, etc.
  approved BOOLEAN NOT NULL DEFAULT false,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.ai_wishes TO anon, authenticated;
GRANT ALL ON public.ai_wishes TO service_role;
ALTER TABLE public.ai_wishes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ai_wish_select_approved" ON public.ai_wishes 
  FOR SELECT 
  TO anon, authenticated
  USING (approved = true);

CREATE POLICY "ai_wish_insert_all" ON public.ai_wishes 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (approved = false);

ALTER PUBLICATION supabase_realtime ADD TABLE public.ai_wishes;


-- LIKES INCREMENT FUNCTIONS
CREATE OR REPLACE FUNCTION public.increment_video_likes(_video_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.video_messages
     SET likes = likes + 1
   WHERE id = _video_id AND approved = true
  RETURNING likes;
$$;

GRANT EXECUTE ON FUNCTION public.increment_video_likes(uuid) TO anon, authenticated;


CREATE OR REPLACE FUNCTION public.increment_photo_likes(_photo_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.photo_booth
     SET likes = likes + 1
   WHERE id = _photo_id AND approved = true
  RETURNING likes;
$$;

GRANT EXECUTE ON FUNCTION public.increment_photo_likes(uuid) TO anon, authenticated;


CREATE OR REPLACE FUNCTION public.increment_ai_wish_likes(_wish_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.ai_wishes
     SET likes = likes + 1
   WHERE id = _wish_id AND approved = true
  RETURNING likes;
$$;

GRANT EXECUTE ON FUNCTION public.increment_ai_wish_likes(uuid) TO anon, authenticated;


-- POLL STATS FUNCTION
CREATE OR REPLACE FUNCTION public.get_poll_stats(_poll_id text)
RETURNS TABLE(option_id text, vote_count bigint)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT 
    option_id,
    COUNT(*)::bigint AS vote_count
  FROM public.poll_responses
  WHERE poll_id = _poll_id
  GROUP BY option_id
  ORDER BY vote_count DESC;
$$;

GRANT EXECUTE ON FUNCTION public.get_poll_stats(text) TO anon, authenticated;


-- STORAGE BUCKETS (run this in Supabase dashboard or via API)
-- These create storage buckets for video and photo uploads

-- Videos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  104857600, -- 100MB limit
  ARRAY['video/mp4', 'video/webm', 'video/quicktime']
) ON CONFLICT (id) DO NOTHING;

-- Photos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'photos',
  'photos',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;


-- STORAGE POLICIES
-- Videos - anyone can upload
CREATE POLICY "videos_upload" ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'videos');

CREATE POLICY "videos_read" ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'videos');

-- Photos - anyone can upload
CREATE POLICY "photos_upload" ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'photos');

CREATE POLICY "photos_read" ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'photos');


-- INDEXES for better performance
CREATE INDEX idx_video_messages_approved ON public.video_messages(approved, created_at DESC);
CREATE INDEX idx_photo_booth_approved ON public.photo_booth(approved, created_at DESC);
CREATE INDEX idx_poll_responses_poll_id ON public.poll_responses(poll_id);
CREATE INDEX idx_ai_wishes_approved ON public.ai_wishes(approved, created_at DESC);
