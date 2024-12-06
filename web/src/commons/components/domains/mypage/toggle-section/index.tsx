"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { webviewlog } from "@/commons/libraries/webview-log";
import { useDeviceSetting } from "@/commons/settings/device-setting/hook";
import Divider from "@/components/commons/divider";

export default function MyPageToggleSection() {
  const { fetchApp } = useDeviceSetting();
  const [toggleRows, setToggleRows] = useState([
    { title: "위치 권한", isChecked: false },
    { title: "알림 권한", isChecked: false },
  ]);

  const updatePermissionStatus = (title, status) => {
    setToggleRows((prevRows) =>
      prevRows.map((row) =>
        row.title === title ? { ...row, isChecked: status === "granted" } : row
      )
    );
  };
  const handleCheckboxChange = async () => {
    // 1. 내설정 화면 진입했을때, 일단 위치허용 여부 물어보기

    const locationPermissionResult = await fetchApp({
      query: "fetchDeviceLocationForPermissionSet",
    });
    // 알림 허용 물어보기
    const alertPermissionResult = await fetchApp({
      query: "fetchDeviceNotificationsForPermissionSet",
    });

    // 2. 물어본게 끝나면, api 요청 해서 그 결과가 허용인지, 거절인지 가져올 수 있음
    // 그걸 통해서 toggle 그림을 바꿔주기
    // 위치 권한 업데이트
    updatePermissionStatus(
      "위치 권한",
      locationPermissionResult.data.fetchDeviceLocationForPermissionSet.status
    );
    // 알림 권한 업데이트
    updatePermissionStatus(
      "알림 권한",
      alertPermissionResult.data.fetchDeviceNotificationsForPermissionSet.status
    );
  };

  const startToggle = async () => {
    // setting화면 으로 이동

    const resultSettingset = fetchApp({
      query: "openDeviceSystemForSettingSet",
    });

    const toggleInterval = setInterval(async () => {
      const isForground = await fetchApp({
        query: "fetchDeviceSystemForAppStateSet",
      });
      // setting 화면에서 우리 앱으로 다시 돌아왔을 경우,
      const isForegroundStatus =
        isForground.data.fetchDeviceSystemForAppStateSet.isForeground;

      if (!isForegroundStatus) return;
      if (isForegroundStatus) {
        handleCheckboxChange();
        clearInterval(toggleInterval);
      }
    }, 1000);
  };

  useEffect(() => {
    //0. 요청하기
    needPermission();
  }, []);

  const needPermission = async () => {
    // 최초 1회 권한 요청하기.
    await fetchApp({
      query: "requestDeviceNotificationsForPermissionSolplaceLogNewSet",
    });
    //  TODO - 에러나는거 고쳐야됨
    // await fetchApp({
    //   query: "requestDeviceLocationForPermissionSet",
    // });

    handleCheckboxChange();
  };

  return (
    <div className={styles.main_container}>
      {toggleRows.map((row, index) => (
        <>
          <div key={index} className={styles.toggleArea}>
            <div className={styles.subtitle}>{row.title}</div>
            <div>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={row.isChecked}
                  onChange={startToggle}
                />
                <div
                  className={`${styles.toggle} ${
                    row.isChecked ? styles.checked : ""
                  } `}
                ></div>
              </label>
            </div>
          </div>
          {index === 1 ? (
            <></>
          ) : (
            <div style={{ width: "calc(100%)" }}>
              <Divider />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
