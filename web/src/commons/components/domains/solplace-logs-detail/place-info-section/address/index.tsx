"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { ICONS } from "@/commons/constants/images";
import { useKakaoMap } from "../../../../../commons/hooks/use-kakao-map";
import { AddressDetail } from "@/components/commons/address";
import { SolplaceMapDetailPage } from "@/components/commons/solplace-map";

interface ISolplaceLogsDetailAddress {
  initialAddress: string;
  initialCenter: {
    lat: number;
    lng: number;
  };
}

export default function SolplaceLogsDetailAddress(props: ISolplaceLogsDetailAddress) {
  const { openMap, handleCenterChanged, toggleMap } = useKakaoMap({
    initialAddress: props.initialAddress,
    initialCenter: props.initialCenter,
  });

  return (
    <div className={styles.address_container}>
      <div className={styles.address_box}>
        <AddressDetail address={props.initialAddress} />
        <div className={styles.map_folder} onClick={toggleMap}>
          <div>지도 {openMap ? "접기" : "보기"}</div>
          <Image
            className={openMap ? styles.rotate : styles.rotate_reverse}
            src={ICONS.downArrow.src}
            alt={ICONS.downArrow.alt}
            width={0}
            height={0}
          />
        </div>
      </div>
      {openMap && <SolplaceMapDetailPage center={props.initialCenter} onCenterChanged={handleCenterChanged} />}
    </div>
  );
}
