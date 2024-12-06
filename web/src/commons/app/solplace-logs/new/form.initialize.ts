"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ISolplaceLogsNewSchema } from "./form.schema";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { useImageStore } from "@/commons/stores/image-store";
// import { useDeviceSetting } from "@/commons/settings/device-setting/hook";
// import { useDeviceSettingRedirect } from "@/commons/settings/device-setting-redirect/hook";
import { useDeviceSetting } from "@/commons/settings/device-setting/hook";

export const useInitialize = (
  method: UseFormReturn<ISolplaceLogsNewSchema>
) => {
  const { fetchApp } = useDeviceSetting();
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const images = useImageStore((state) => state.images);
  const clearImages = useImageStore((state) => state.clearImages);

  const onSubmit = (data: ISolplaceLogsNewSchema) => {
    console.log(data);

    router.push(
      `/solplace-logs?toastMessage=${encodeURIComponent("플레이스 등록 완료")}`
    );

    fetchApp({
      query: "requestDeviceNotificationsForPermissionSolplaceLogNewSet",
    });
    // 아직 API 연결이 안되었기 때문에 강제로 1번 글로 이동하는 것으로 구현
    // TODO: API 연결시 생성된 글 id를 받아서 넘겨야함
    fetchApp({
      query: `createDeviceNotificationsForSolplaceLogNewSet`,
      variables: { solplaceLogId: "1" },
    });

    clearImages();
  };

  useEffect(() => {
    if (searchParams.size !== 0) {
      method.setValue("title", params.title);
      method.setValue("images", images);
      method.setValue("address", params.address);
      method.setValue("lat", Number(params.lat));
      method.setValue("lng", Number(params.lng));
      method.setValue("contents", params.contents);

      method.trigger();
    }
  }, [searchParams]);

  return {
    onSubmit,
  };
};
