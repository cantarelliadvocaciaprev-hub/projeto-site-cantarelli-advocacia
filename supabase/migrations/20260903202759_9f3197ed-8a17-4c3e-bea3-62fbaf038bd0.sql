CREATE TABLE public.whatsapp_click_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  path TEXT NOT NULL,
  cta_location TEXT NOT NULL,
  context_label TEXT,
  source TEXT,
  medium TEXT,
  campaign TEXT,
  referrer TEXT,
  device_type TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.whatsapp_click_events TO anon, authenticated;
GRANT ALL ON public.whatsapp_click_events TO service_role;

ALTER TABLE public.whatsapp_click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a whatsapp click"
ON public.whatsapp_click_events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_whatsapp_click_events_created_at ON public.whatsapp_click_events (created_at DESC);