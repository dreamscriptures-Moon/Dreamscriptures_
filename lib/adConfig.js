// Adsterra is enabled by default now that the traffic-measurement test is complete.
// Set NEXT_PUBLIC_ADSTERRA_ENABLED=false to temporarily disable placements.
export const ADSTERRA_ENABLED =
  process.env.NEXT_PUBLIC_ADSTERRA_ENABLED !== "false";
