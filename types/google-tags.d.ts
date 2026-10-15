export {};

interface AdsByGoogle {
  push: (config: Record<string, unknown>) => void;
  pauseAdRequests?: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    adsbygoogle?: AdsByGoogle;
  }
}
