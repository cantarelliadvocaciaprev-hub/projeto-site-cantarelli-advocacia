CREATE TABLE public.share_click_events (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  network text NOT NULL,
  article_slug text NOT NULL,
  article_title text,
  device_type text NOT NULL,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.share_click_events TO anon, authenticated;
GRANT ALL ON public.share_click_events TO service_role;

ALTER TABLE public.share_click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a share event"
ON public.share_click_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_share_click_events_created_at ON public.share_click_events (created_at DESC);
CREATE INDEX idx_share_click_events_article_slug ON public.share_click_events (article_slug);
CREATE INDEX idx_share_click_events_network ON public.share_click_events (network);