-- Create reports table for storing citizen grievance reports
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  photo_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert reports (public submissions)
CREATE POLICY "Anyone can submit reports"
  ON public.reports
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to view reports (public transparency)
CREATE POLICY "Anyone can view reports"
  ON public.reports
  FOR SELECT
  USING (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS reports_created_at_idx ON public.reports(created_at DESC);
CREATE INDEX IF NOT EXISTS reports_status_idx ON public.reports(status);
CREATE INDEX IF NOT EXISTS reports_category_idx ON public.reports(category);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_reports_updated_at ON public.reports;
CREATE TRIGGER update_reports_updated_at
  BEFORE UPDATE ON public.reports
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
