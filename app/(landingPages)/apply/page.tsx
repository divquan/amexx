"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    // script.onload = () => {
    //   // @ts-ignore
    //   window.jotformEmbedHandler(
    //     "iframe[id='JotFormIFrame-242187298929070']",
    //     "https://form.jotform.com/"
    //   );
    // };
    // document.body.appendChild(script);
  }, []);

  return (
    <>
      <iframe
        id="JotFormIFrame-242187298929070"
        title="Application Form"
        onLoad={() => {
          setLoading(false);
          window.parent.scrollTo(0, 0);
        }}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/213502382215546"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "1800px",
          border: "none",
          paddingTop: "100px",
          // paddingBottom: "40px",
        }}
        scrolling="no"
      ></iframe>
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader2 size={42} className="text-primary animate-spin" />
        </div>
      )}
    </>
  );
};
