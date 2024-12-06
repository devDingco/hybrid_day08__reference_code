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

  const fetchDeviceLocationForPermissionSet = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    onResponse({
      fetchDeviceLocationForPermissionSet: {
        status: result.status,
      },
    });
  };

  return {
    fetchDeviceLocationForLatLngSet,
    fetchDeviceLocationForPermissionSet,
  };
};
