"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const FETCH_DEVICE_KEY: { [key: string]: any } = {};

export default function DeviceSetting({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  // web으로만 봤을때 나오는 response JSON 오류는 무시해줘도 됨.
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기
    document.addEventListener("message", (message: any) => {
      if (!message.data) return;
      const response = JSON.parse(message.data);

      if (response.redirect) {
        return router.push(response.redirect);
      }

      const query = Object.keys(response)[0];
      const resolve = FETCH_DEVICE_KEY[query];
      if (typeof resolve === "function") {
        resolve({ data: response });
        delete FETCH_DEVICE_KEY[query];
      } else {
        console.warn(`No function found for key: ${query}`);
      }
    });

    // 2. IOS에서 수신 대기
    window.addEventListener("message", (message: any) => {
      if (!message.data) return;
      const response = JSON.parse(message.data);

      if (response.redirect) {
        return router.push(response.redirect);
      }

      const query = Object.keys(response)[0];
      const resolve = FETCH_DEVICE_KEY[query];

      if (typeof resolve === "function") {
        resolve({ data: response });
        delete FETCH_DEVICE_KEY[query];
      } else {
        console.warn(`No function found for key: ${query}`);
      }
    });
  }, []);

  return <>{children}</>;
}
