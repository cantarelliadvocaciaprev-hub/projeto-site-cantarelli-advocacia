CREATE TABLE public.article_view_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug text NOT NULL,
  article_title text,
  device_type text,
  referrer text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_article_view_events_slug ON public.article_view_events (article_slug);
CREATE INDEX idx_article_view_events_created_at ON public.article_view_events (created_at DESC);

GRANT INSERT ON public.article_view_events TO anon;
GRANT INSERT ON public.article_view_events TO authenticated;
GRANT ALL ON public.article_view_events TO service_role;

ALTER TABLE public.article_view_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log an article view"
ON public.article_view_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);