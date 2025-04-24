import Script from "next/script";

const JSONld = () => {
  return (
    <Script
      id="JSONLD"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PureClean Jönköping",
          image: "https://purecleanjkpg.se/assets/images/og-image.jpg",
          "@id": "https://www.purecleanjkpg.se",
          url: "https://www.purecleanjkpg.se",
          telephone: "+46793419242",
          priceRange: "300 - 750 SEK",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tallörtsbacken 25.",
            addressLocality: "Jönköping",
            postalCode: "55458",
            addressCountry: "SE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 57.77147240000001,
            longitude: 14.2134528,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61575756775957",
            "https://www.instagram.com/purecleanjkpg",
            "https://www.youtube.com/channel/UCfgQn5LoBafRs4foDsHn0Ug",
            "https://www.purecleanjkpg.se",
          ],
        }),
      }}
    />
  );
};

export default JSONld;
