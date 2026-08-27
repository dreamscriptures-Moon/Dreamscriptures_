// Adsterra is disabled during the traffic-measurement test.
// Set NEXT_PUBLIC_ADSTERRA_ENABLED=true in the deployment environment to restore it.
export const ADSTERRA_ENABLED =
  process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === "true";
