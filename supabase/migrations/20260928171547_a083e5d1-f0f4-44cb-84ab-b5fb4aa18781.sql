CREATE TABLE public.admin_login_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash text NOT NULL,
  success boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.admin_login_attempts TO service_role;
ALTER TABLE public.admin_login_attempts ENABLE ROW LEVEL SECURITY;
CREATE INDEX admin_login_attempts_ip_idx ON public.admin_login_attempts (ip_hash, created_at DESC);

CREATE TABLE public.google_reviews_cache (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  rating numeric NOT NULL DEFAULT 4.9,
  review_count integer NOT NULL DEFAULT 0,
  reviews jsonb NOT NULL DEFAULT '[]'::jsonb,
  fetched_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.google_reviews_cache TO anon, authenticated;
GRANT ALL ON public.google_reviews_cache TO service_role;
ALTER TABLE public.google_reviews_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read reviews cache" ON public.google_reviews_cache FOR SELECT TO anon, authenticated USING (true);

-- Limit size of anonymous tracking inserts to prevent abuse / junk data
CREATE OR REPLACE FUNCTION public.sanitize_tracking_row()
RETURNS trigger LANGUAGE plpgsql SET search_path TO 'public' AS $$
DECLARE k text; v jsonb; r jsonb;
BEGIN
  r := to_jsonb(NEW);
  FOR k, v IN SELECT * FROM jsonb_each(r) LOOP
    IF jsonb_typeof(v) = 'string' AND length(v #>> '{}') > 500 THEN
      r := jsonb_set(r, ARRAY[k], to_jsonb(left(v #>> '{}', 500)));
    END IF;
  END LOOP;
  r := jsonb_set(r, '{created_at}', to_jsonb(now()));
  r := jsonb_set(r, '{id}', to_jsonb(gen_random_uuid()));
  NEW := jsonb_populate_record(NEW, r);
  RETURN NEW;
END; $$;

CREATE TRIGGER sanitize_page_view BEFORE INSERT ON public.page_view_events FOR EACH ROW EXECUTE FUNCTION public.sanitize_tracking_row();
CREATE TRIGGER sanitize_article_view BEFORE INSERT ON public.article_view_events FOR EACH ROW EXECUTE FUNCTION public.sanitize_tracking_row();
CREATE TRIGGER sanitize_review_click BEFORE INSERT ON public.review_click_events FOR EACH ROW EXECUTE FUNCTION public.sanitize_tracking_row();
CREATE TRIGGER sanitize_share_click BEFORE INSERT ON public.share_click_events FOR EACH ROW EXECUTE FUNCTION public.sanitize_tracking_row();
CREATE TRIGGER sanitize_whatsapp_click BEFORE INSERT ON public.whatsapp_click_events FOR EACH ROW EXECUTE FUNCTION public.sanitize_tracking_row();

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;