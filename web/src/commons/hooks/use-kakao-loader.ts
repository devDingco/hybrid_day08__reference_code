import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAOJSKEY || "";

  useKakaoLoaderOrigin({
    appkey: kakaoAppKey,
    libraries: ["clusterer", "drawing", "services"],
  });
}
