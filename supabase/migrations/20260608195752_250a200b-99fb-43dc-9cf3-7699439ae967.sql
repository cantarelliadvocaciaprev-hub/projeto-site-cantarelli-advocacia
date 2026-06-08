CREATE TABLE public.review_click_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL CHECK (event_type IN ('click', 'return')),
  device_type TEXT NOT NULL CHECK (device_type IN ('mobile', 'tablet', 'desktop')),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.review_click_events TO anon;
GRANT INSERT ON public.review_click_events TO authenticated;
GRANT ALL ON public.review_click_events TO service_role;

ALTER TABLE public.review_click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a review button event"
ON public.review_click_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_review_click_events_created_at ON public.review_click_events (created_at);
CREATE INDEX idx_review_click_events_type_device ON public.review_click_events (event_type, device_type);