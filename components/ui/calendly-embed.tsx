"use client"
import { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url?: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-[90vw] sm:w-[80vw] md:w-[60vw] h-[140vh] my-10 shadow-md md:shadow-none"
      data-url={url}
    ></div>
  );
};

export default CalendlyEmbed;