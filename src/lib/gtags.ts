// original: https://dany-rivera.medium.com/how-to-integrate-google-analytics-on-your-next-js-13-app-easy-guide-c7389666831c

import { env } from "@/env.mjs";

export const GA_TRACKING_ID: string | undefined = env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (url: string): void => {
  if (typeof window.gtag === "function" && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  if (typeof window.gtag === "function" && GA_TRACKING_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
