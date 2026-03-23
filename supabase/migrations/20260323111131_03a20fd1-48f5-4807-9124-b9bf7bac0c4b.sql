-- Create view counter table
CREATE TABLE public.page_views (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count BIGINT NOT NULL DEFAULT 0,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Insert initial row
INSERT INTO public.page_views (id, count) VALUES (1, 0);

-- Enable RLS
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the count
CREATE POLICY "Anyone can read view count" ON public.page_views FOR SELECT USING (true);

-- Allow anyone to update the count (for incrementing)
CREATE POLICY "Anyone can increment view count" ON public.page_views FOR UPDATE USING (true);

-- Create function to increment and return count
CREATE OR REPLACE FUNCTION public.increment_view_count()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE page_views SET count = count + 1 WHERE id = 1 RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;