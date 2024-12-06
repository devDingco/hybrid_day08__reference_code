import Script from "next/script";
import React from "react";

const API = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOJSKEY}&libraries=services,clusterer&autoload=false`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Script src={API} strategy="beforeInteractive" />
      {children}
    </div>
  );
}
