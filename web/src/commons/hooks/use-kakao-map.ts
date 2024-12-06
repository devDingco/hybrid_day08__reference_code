"use client";

import useKakaoLoader from "@/commons/hooks/use-kakao-loader";
import { useState } from "react";

interface IUseKakaoMap {
  initialAddress: string;
  initialCenter: {
    lat: number;
    lng: number;
  };
}

export function useKakaoMap(props: IUseKakaoMap) {
  const [openMap, setOpenMap] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<string>(props.initialAddress);
  const [center, setCenter] = useState(props.initialCenter);

  useKakaoLoader();

  const getAddress = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCurrentAddress(result[0].address.address_name);
      }
    });
  };

  const handleCenterChanged = (map: kakao.maps.Map) => {
    const centerLatLng = map.getCenter();
    setCenter({
      lat: centerLatLng.getLat(),
      lng: centerLatLng.getLng(),
    });
    getAddress(centerLatLng.getLat(), centerLatLng.getLng());
  };

  const toggleMap = () => {
    setOpenMap((prev) => !prev);
  };

  return {
    openMap,
    currentAddress,
    center,
    handleCenterChanged,
    toggleMap,
  };
}
