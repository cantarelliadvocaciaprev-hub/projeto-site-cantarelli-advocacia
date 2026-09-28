DROP POLICY IF EXISTS "Anyone can log a review button event" ON public.review_click_events;
CREATE POLICY "Anyone can log a review button event" ON public.review_click_events FOR INSERT TO anon, authenticated
WITH CHECK (event_type IN ('click','return') AND device_type IN ('mobile','tablet','desktop'));

DROP POLICY IF EXISTS "Anyone can log an article view" ON public.article_view_events;
CREATE POLICY "Anyone can log an article view" ON public.article_view_events FOR INSERT TO anon, authenticated
WITH CHECK (length(article_slug) BETWEEN 1 AND 200 AND (device_type IS NULL OR device_type IN ('mobile','tablet','desktop')));

DROP POLICY IF EXISTS "Anyone can log a share event" ON public.share_click_events;
CREATE POLICY "Anyone can log a share event" ON public.share_click_events FOR INSERT TO anon, authenticated
WITH CHECK (length(network) BETWEEN 1 AND 50 AND length(article_slug) BETWEEN 1 AND 200 AND device_type IN ('mobile','tablet','desktop'));

DROP POLICY IF EXISTS "Anyone can log a whatsapp click" ON public.whatsapp_click_events;
CREATE POLICY "Anyone can log a whatsapp click" ON public.whatsapp_click_events FOR INSERT TO anon, authenticated
WITH CHECK (length(path) BETWEEN 1 AND 500 AND length(cta_location) BETWEEN 1 AND 200 AND (device_type IS NULL OR device_type IN ('mobile','tablet','desktop')));

DROP POLICY IF EXISTS "Anyone can log a page view" ON public.page_view_events;
CREATE POLICY "Anyone can log a page view" ON public.page_view_events FOR INSERT TO anon, authenticated
WITH CHECK (length(path) BETWEEN 1 AND 500 AND length(source) BETWEEN 1 AND 200 AND (device_type IS NULL OR device_type IN ('mobile','tablet','desktop')));

DROP POLICY IF EXISTS "Public can read reviews cache" ON public.google_reviews_cache;
CREATE POLICY "Public can read reviews cache" ON public.google_reviews_cache FOR SELECT TO anon, authenticated
USING (id = 1);