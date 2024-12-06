import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type THeaderType = {
  [K in "globalHeader" | "localHeader"]: {
    [key: string]: {
      title: string;
      hasLogo: boolean;
      hasBack: boolean;
      isTransParent: boolean;
      backUrl?: string;
      hasExit?: boolean;
    };
  };
};

export const headerType = (params: Params): THeaderType => ({
  globalHeader: {
    "/login": {
      title: "",
      hasLogo: true,
      hasBack: false,
      isTransParent: false,
    },
    "/signup": {
      title: "",
      hasLogo: false,
      hasBack: true,
      isTransParent: false,
    },
    "/solplace-logs/new": {
      title: "플레이스 등록",
      hasLogo: false,
      hasBack: true,
      isTransParent: false,
    },
    "/solplace-logs": {
      title: "플레이스",
      hasLogo: false,
      hasBack: false,
      isTransParent: false,
    },
    "/mypage": {
      title: "내 설정",
      hasLogo: false,
      hasBack: false,
      isTransParent: false,
    },
    [`/solplace-logs/${params.solplaceLogId}`]: {
      title: "",
      hasLogo: false,
      hasBack: true,
      isTransParent: true,
      backUrl: `/solplace-logs/`,
    },
    [`/solplace-logs/${params.solplaceLogId}/edit`]: {
      title: "플레이스 수정",
      hasLogo: false,
      hasBack: true,
      isTransParent: false,
      backUrl: `/solplace-logs/${params.solplaceLogId}`,
    },
    [`/parallel-routing`]: {
      title: "",
      hasLogo: false,
      hasBack: false,
      hasExit: true,
      isTransParent: true,
    },
  },
  localHeader: {},
});
