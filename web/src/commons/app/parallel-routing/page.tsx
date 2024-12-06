"use client";
import { webviewlog } from "@/commons/libraries/webview-log";
import { useDeviceSetting } from "@/commons/settings/device-setting/hook";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ParallelRouting() {
  const router = useRouter();

  const { fetchApp } = useDeviceSetting();

  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const [isLoading, setIsLoading] = useState(false);
  webviewlog(`${image}`);
  // const onClickFullScreen = async () => {
  useEffect(() => {
    setIsLoading(true);

    //   다음 틱으로 넘기기
    window.setTimeout(() => {
      fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" });
      fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" });
      document.querySelector("meta[name='viewport']")?.setAttribute(
        "content",
        `
          width=device-width,
          initial-scale=1.0,
          minimum-scale=1.0,
          maximum-scale=3.0,
          user-scalable=yes
      `
      );
      window.setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 100);
  }, []);

  // };

  const onClickClose = async () => {
    // 여기도 동일한 방법으로 적용하기!
    router.back();
    // setIsLoading(true);

    // window.setTimeout(() => {
    //   setIsFullScreen(false);
    //   fetchApp({ query: "toggleDeviceLayoutForNotchTranslucentSet" });
    //   fetchApp({ query: "toggleDeviceLayoutForPinchZoomSet" });
    //   document.querySelector("meta[name='viewport']")?.setAttribute(
    //     "content",
    //     `
    //         width=device-width,
    //         initial-scale=1.0,
    //         minimum-scale=1.0,
    //         maximum-scale=1.0,
    //         user-scalable=no
    //     `
    //   );

    //   window.setTimeout(() => {
    //     setIsLoading(false);
    //   }, 100);
    // }, 100);
  };
  if (isLoading) return <div></div>;
  return (
    <div>
      <div
        style={{
          width: "100vw", // 실제 프로젝트시? => 모달 페이지 만들고 페러렐라우팅하기
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "black",
          position: "relative",
          left: "-1.25rem",
        }}
      >
        <img src={image} alt="확대된 이미지" />
      </div>
    </div>
  );
}
