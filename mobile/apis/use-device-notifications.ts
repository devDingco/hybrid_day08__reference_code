import * as Notifications from "expo-notifications";
import { useEffect } from "react";

// 1. 알람 수신 대기(IOS 필수)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useDeviceNotifications = (onResponse: any) => {
  // 2. 알람 스케줄 생성
  const createDeviceNotificationsForSolplaceLogNewSet = async (
    variables: any
  ) => {
    const { solplaceLogId } = variables;
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "솔플레이스 등록 완료",
        body: "신규 솔플레이스로그가 등록되었습니다.",
        data: {
          page: `/solplace-logs/${solplaceLogId}`,
        },
      },
      trigger: null,
    });
    onResponse({
      createDeviceNotificationsForSolplaceLogNewSet: {
        message: "등록완료",
      },
    });
  };

  // 3. 알람 권한 요청
  const requestDeviceNotificationsForPermissionSolplaceLogNewSet = async () => {
    await Notifications.requestPermissionsAsync();

    onResponse({
      requestDeviceNotificationsForPermissionSolplaceLogNewSet: {
        message: "요청완료",
      },
    });
  };

  // 알림 권한 허용 헀는지 여부를 확인하는 함수
  const fetchDeviceNotificationsForPermissionSet = async () => {
    const result = await Notifications.getPermissionsAsync();

    onResponse({
      fetchDeviceNotificationsForPermissionSet: {
        status: result.status,
      },
    });
  };
  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener((response) => {
      const notificationData = response.notification.request.content.data;
      onResponse({ redirect: notificationData.page });
    });
  }, []);

  return {
    createDeviceNotificationsForSolplaceLogNewSet,
    requestDeviceNotificationsForPermissionSolplaceLogNewSet,
    fetchDeviceNotificationsForPermissionSet,
  };
};
