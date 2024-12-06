import { FETCH_DEVICE_KEY } from ".";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export const useDeviceSetting = () => {
  const fetchApp = async <T>({ query, variables = {} }: { query: string; variables?: any }): Promise<T> => {
    const result = await new Promise<T>((resolve) => {
      FETCH_DEVICE_KEY[query] = resolve;
      window.ReactNativeWebView.postMessage(JSON.stringify({ query, variables }));
    });
    return result;
  };

  return {
    fetchApp,
  };
};
