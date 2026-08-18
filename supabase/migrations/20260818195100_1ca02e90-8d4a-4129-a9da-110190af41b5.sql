CREATE TABLE public.page_view_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text NOT NULL,
  page_title text,
  source text NOT NULL DEFAULT 'direto',
  medium text,
  campaign text,
  referrer text,
  device_type text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.page_view_events TO anon, authenticated;
GRANT ALL ON public.page_view_events TO service_role;

ALTER TABLE public.page_view_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a page view"
ON public.page_view_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_page_view_events_created_at ON public.page_view_events (created_at DESC);
CREATE INDEX idx_page_view_events_source ON public.page_view_events (source);