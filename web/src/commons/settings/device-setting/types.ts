export interface DeviceSystemForAppSetResponse {
  data: {
    fetchDeviceSystemForAppSet: {
      appVersion: string;
    };
  };
}

export interface DeviceSystemForPlatformSetResponse {
  data: {
    fetchDeviceSystemForPlatformSet: {
      modelName: string;
    };
  };
}

export interface DeviceLocationForLatLngSetResponse {
  data: {
    fetchDeviceLocationForLatLngSet: {
      lat: number;
      lng: number;
    };
  };
}
