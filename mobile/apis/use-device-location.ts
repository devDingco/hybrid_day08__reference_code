import * as Location from "expo-location";

export const useDeviceLocation = (onResponse: any) => {
  const fetchDeviceLocationForLatLngSet = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status === "granted") {
      const location = await Location.getCurrentPositionAsync();
      onResponse({
        fetchDeviceLocationForLatLngSet: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    } else {
      onResponse({ fetchDeviceLocationForLatLngSet: { lat: 37, lng: 128 } });
    }
  };

  //권한만 쏙 빼오기!
  const fetchDeviceLocationForPermissionSet = async () => {
    const result = await Location.getForegroundPermissionsAsync();

    onResponse({
      fetchDeviceLocationForPermissionSet: {
        status: result.status,
      },
    });
  };

  // 권한 빼오기 전에, 요청만 하는것!
  const requestDeviceLocationForPermissionSet = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    onResponse({
      requestDeviceLocationForPermissionSet: {
        status: result.status,
      },
    });
  };

  return {
    fetchDeviceLocationForLatLngSet,
    fetchDeviceLocationForPermissionSet,
    requestDeviceLocationForPermissionSet,
  };
};
