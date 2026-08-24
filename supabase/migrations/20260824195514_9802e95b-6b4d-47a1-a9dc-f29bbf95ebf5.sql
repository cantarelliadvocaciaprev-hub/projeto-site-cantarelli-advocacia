CREATE TABLE public.application_send_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX idx_application_send_log_ip_time ON public.application_send_log (ip_hash, created_at DESC);
GRANT ALL ON public.application_send_log TO service_role;
ALTER TABLE public.application_send_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "No public access to application send log" ON public.application_send_log FOR SELECT TO authenticated USING (false);