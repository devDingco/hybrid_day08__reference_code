import { useState } from "react";

export const useDeviceLayout = (onResponse: any) => {
  const [layout, setLayout] = useState({
    isNotchTranslucent: false,
    notchContent: "dark-content", // light-content, dark-content, ...
    notchBackgroundColor: "transparent", // transparent, black, ...
    isPinchZoom: false,
  });

  const toggleDeviceLayoutForNotchTranslucentSet = () => {
    setLayout((prev) => ({
      ...prev,
      isNotchTranslucent: !prev.isNotchTranslucent,
    }));
    onResponse({
      toggleDeviceLayoutForNotchTranslucentSet: {
        message: "변경완료",
      },
    });
  };

  const toggleDeviceLayoutForPinchZoomSet = () => {
    setLayout((prev) => ({
      ...prev,
      isPinchZoom: !prev.isPinchZoom,
    }));
    onResponse({
      toggleDeviceLayoutForPinchZoomSet: {
        message: "변경완료",
      },
    });
  };

  return {
    toggleDeviceLayoutForNotchTranslucentSet,
    toggleDeviceLayoutForPinchZoomSet,
    layout,
  };
};
