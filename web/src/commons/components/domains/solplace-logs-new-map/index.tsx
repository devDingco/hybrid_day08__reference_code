"use client";

import { useKakaoMap } from "@/commons/hooks/use-kakao-map";
import { ButtonPrimaryMFull } from "@/components/commons/button";
import { SolplaceMapNewAndEditPage } from "@/components/commons/solplace-map";
import { TextContainerRoundMFull } from "@/components/commons/text-container";
import styles from "./styles.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SolplaceLogsNewMap() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { handleCenterChanged, currentAddress, center } = useKakaoMap({
    initialAddress: params.address || "서울특별시 중구 세종대로 110",
    initialCenter: { lat: Number(params.lat) || 37.5666, lng: Number(params.lng) || 126.979 },
  });

  return (
    <>
      <SolplaceMapNewAndEditPage center={center} onCenterChanged={handleCenterChanged} />
      <div className={styles.bottom}>
        <TextContainerRoundMFull>{currentAddress}</TextContainerRoundMFull>
        <Link
          href={{
            pathname: `/solplace-logs/new`,
            query: { ...params, address: currentAddress, lat: center.lat, lng: center.lng },
          }}
        >
          <ButtonPrimaryMFull buttonText="이 위치로 등록" />
        </Link>
      </div>
    </>
  );
}
