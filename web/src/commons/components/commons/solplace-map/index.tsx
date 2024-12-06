import { ICONS } from "@/commons/constants/images";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "./styles.module.css";

interface ISolplaceMapBase {
  className: string;
  center: { lat: number; lng: number };
  onCenterChanged: (map: kakao.maps.Map) => void;
}

function SolplaceMapBase(props: ISolplaceMapBase) {
  return (
    <Map id="map" center={props.center} className={props.className} level={2} onCenterChanged={props.onCenterChanged}>
      <MapMarker
        image={{ src: `${ICONS.mapMarker.src}`, size: { width: 17.61, height: 24.5 } }}
        position={props.center}
      />
    </Map>
  );
}

interface ISolplaceMap {
  center: { lat: number; lng: number };
  onCenterChanged: (map: kakao.maps.Map) => void;
}

export function SolplaceMapDetailPage(props: ISolplaceMap) {
  return (
    <SolplaceMapBase className={styles.map_detail_page} center={props.center} onCenterChanged={props.onCenterChanged} />
  );
}

export function SolplaceMapNewAndEditPage(props: ISolplaceMap) {
  return (
    <SolplaceMapBase
      className={styles.map_new_and_edit_page}
      center={props.center}
      onCenterChanged={props.onCenterChanged}
    />
  );
}
