import { AppState, Platform } from "react-native";
import Constants from "expo-constants";
import * as Device from "expo-device";

export const useDeviceSystem = (onResponse: any) => {
  const isAndroid = Platform.OS === "android";
  const isIos = Platform.OS === "ios";

  const fetchDeviceSystemForAppSet = () => {
    onResponse({
      fetchDeviceSystemForAppSet: {
        appVersion:
          (isAndroid && Constants.expoConfig?.android?.versionCode) ||
          (isIos && Constants.expoConfig?.ios?.buildNumber),
      },
    });
  };

  const fetchDeviceSystemForPlatformSet = () => {
    onResponse({
      fetchDeviceSystemForPlatformSet: {
        os: Platform.OS,
        osVersion: Device.osVersion,
        modelName: Device.modelName,
      },
    });
  };

  const fetchDeviceSystemForAppStateSet = () => {
    const isForeground = AppState.currentState === "active";
    onResponse({
      fetchDeviceSystemForAppStateSet: {
        isForeground,
      },
    });
  };

  return {
    fetchDeviceSystemForPlatformSet,
    fetchDeviceSystemForAppSet,
    fetchDeviceSystemForAppStateSet,
  };
};
