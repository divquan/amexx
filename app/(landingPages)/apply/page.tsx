"use client";
import React from "react";

const Page = () => {
  return (
    <div className=" some">
      {/* <JotformEmbed
        src="https://form.jotform.com/242187298929070"
        style={{ height: 800 }}
        height={800}
      /> */}
      <ApplicationForm />
    </div>
  );
};

export default Page;

import { useEffect } from "react";

const ApplicationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      // @ts-ignore
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242187298929070']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      id="JotFormIFrame-242187298929070"
      title="Application Form"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowTransparency={true}
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/213502382215546"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        height: "539px",
        border: "none",
        paddingTop: "100px",
      }}
    ></iframe>
  );
};
