import { useDeviceLocation } from "./use-device-location";
import { useDeviceNotifications } from "./use-device-notifications";
import { useDeviceSystem } from "./use-device-system";
import { useDeviceLayout } from "./use-device-layout";
import { useDeviceOpenSettings } from "./use-open-settings";

export const useApis = (webviewRef: any) => {
  let APIS = {};

  const onResponse = (result: any) => {
    webviewRef.current?.postMessage(JSON.stringify(result));
  };

  const onRequest = (query: any, variables: any) => {
    APIS[query](variables);
  };

  [
    useDeviceSystem,
    useDeviceLocation,
    useDeviceNotifications,
    useDeviceOpenSettings,
    useDeviceLayout,
  ].forEach((el) => {
    APIS = { ...APIS, ...el(onResponse) };
  });

  return {
    onRequest,
    onResponse,
    layout: APIS.layout,
  };
};
