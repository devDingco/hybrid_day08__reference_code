"use client";

import { useKakaoMap } from "@/commons/hooks/use-kakao-map";
import { ButtonPrimaryMFull } from "@/components/commons/button";
import { SolplaceMapNewAndEditPage } from "@/components/commons/solplace-map";
import { TextContainerRoundMFull } from "@/components/commons/text-container";
import styles from "./styles.module.css";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function SolplaceLogsDetailEditMap() {
  const boardId = useParams();
  const id = boardId.solplaceLogId.toString();

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { handleCenterChanged, currentAddress, center } = useKakaoMap({
    initialAddress: params.address,
    initialCenter: { lat: Number(params.lat), lng: Number(params.lng) },
  });

  return (
    <>
      <SolplaceMapNewAndEditPage center={center} onCenterChanged={handleCenterChanged} />
      <div className={styles.bottom}>
        <TextContainerRoundMFull>{currentAddress}</TextContainerRoundMFull>
        <Link
          href={{
            pathname: `/solplace-logs/${id}/edit`,
            query: { ...params, address: currentAddress, lat: center.lat, lng: center.lng },
          }}
        >
          <ButtonPrimaryMFull buttonText="이 위치로 등록" />
        </Link>
      </div>
    </>
  );
}
