
CREATE TABLE public.assistant_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  summary text,
  matched_slugs text[] NOT NULL DEFAULT '{}',
  matched_count integer NOT NULL DEFAULT 0,
  device_type text,
  ip_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.assistant_questions TO authenticated;
GRANT ALL ON public.assistant_questions TO service_role;

ALTER TABLE public.assistant_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access to assistant questions"
ON public.assistant_questions
FOR SELECT
TO authenticated
USING (false);

CREATE INDEX assistant_questions_created_at_idx ON public.assistant_questions (created_at DESC);
