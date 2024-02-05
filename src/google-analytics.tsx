// original: https://dany-rivera.medium.com/how-to-integrate-google-analytics-on-your-next-js-13-app-easy-guide-c7389666831c

"use client";

import * as gtags from "@/lib/gtags";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtags.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        // biome-ignore lint: "TODO: Fix this later"
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtags.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
