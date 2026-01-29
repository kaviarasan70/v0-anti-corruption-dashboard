-- Seed sample reports data for demonstration
-- This script inserts 15 sample citizen reports into the reports table
-- Run this after creating the reports table

INSERT INTO public.reports (category, location, description, status, created_at, updated_at) VALUES
('Pothole', 'Connaught Place, New Delhi', 'Multiple potholes near the main plaza affecting traffic flow. Vehicles are avoiding the area, causing congestion on alternate routes.', 'pending', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),
('Water Scarcity', 'Marathahalli, Bangalore', 'Severe water shortage in the residential area. Water is supplied only for 2 hours in the morning.', 'in-progress', NOW() - INTERVAL '12 days', NOW() - INTERVAL '2 days'),
('Street Light', 'Andheri West, Mumbai', 'Street lights have been non-functional for over 2 weeks. The dark area has become a safety hazard.', 'resolved', NOW() - INTERVAL '20 days', NOW() - INTERVAL '3 days'),
('Drainage', 'Salt Lake, Kolkata', 'Drainage system is completely blocked causing water accumulation. The stagnant water is causing mosquito breeding.', 'pending', NOW() - INTERVAL '7 days', NOW() - INTERVAL '7 days'),
('Power Outage', 'Banjara Hills, Hyderabad', 'Frequent power cuts in the area. Electricity is cut off for 6-8 hours daily.', 'in-progress', NOW() - INTERVAL '10 days', NOW() - INTERVAL '1 day'),
('Road Damage', 'Vastrapur, Ahmedabad', 'Major road damage with large cracks and uneven surface. This is causing frequent accidents.', 'pending', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
('Water Pipeline', 'Indiranagar, Bangalore', 'Water pipeline has burst leading to water loss and reduced pressure in surrounding areas.', 'in-progress', NOW() - INTERVAL '8 days', NOW() - INTERVAL '1 day'),
('Garbage', 'Dadar East, Mumbai', 'Garbage accumulation on the streets for the past week. Sanitation workers have not cleared the waste.', 'resolved', NOW() - INTERVAL '15 days', NOW() - INTERVAL '5 days'),
('Street Light', 'Alipore, Kolkata', 'Multiple street lights are not functioning properly. Some are flickering and some are completely off.', 'pending', NOW() - INTERVAL '4 days', NOW() - INTERVAL '4 days'),
('Pothole', 'Gachibowli, Hyderabad', 'Large pothole near the main intersection. Traffic has to move slowly to avoid the pothole.', 'pending', NOW() - INTERVAL '6 days', NOW() - INTERVAL '6 days'),
('Water Quality', 'Sector 32, Chandigarh', 'Water supplied from the tap has a foul smell and discoloration. Tests have been requested.', 'in-progress', NOW() - INTERVAL '9 days', NOW() - INTERVAL '2 days'),
('Traffic Signal', 'MG Road, Bangalore', 'Traffic signal has been down for 3 days causing severe traffic congestion.', 'resolved', NOW() - INTERVAL '18 days', NOW() - INTERVAL '4 days'),
('Water Stagnation', 'Koti, Hyderabad', 'Stagnant water in the streets after recent rains has not been cleared. Mosquitoes are breeding rapidly.', 'pending', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
('Road Subsidence', 'Whitefield, Bangalore', 'Road has subsided creating a dangerous dip. Vehicles are unable to pass safely.', 'in-progress', NOW() - INTERVAL '11 days', NOW() - INTERVAL '1 day'),
('Street Light Vandalism', 'Thane, Mumbai', 'Street lights have been vandalized. Glass covers are broken and some bulbs are missing.', 'pending', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day');

-- Verify data was inserted
SELECT COUNT(*) as total_reports FROM public.reports;
