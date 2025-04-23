import Script from "next/script";
import React from "react";

const GoogleAnalyticsScripts = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const AW_CONVERSION_ID = process.env.NEXT_PUBLIC_GTM_MEASUREMENT_ID;

  if (!GA_TRACKING_ID || !AW_CONVERSION_ID) {
    console.warn("Google Analytics or Google Ads tracking ID is missing");
    return null;
  }

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${AW_CONVERSION_ID}`}
          />
          <Script id="ga-init">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
          gtag('config', '${AW_CONVERSION_ID}');
        `}
          </Script>
        </>
      )}
    </>
  );
};

export default GoogleAnalyticsScripts;
