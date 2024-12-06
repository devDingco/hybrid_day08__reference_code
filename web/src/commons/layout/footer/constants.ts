import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type TFooterType = {
  [key: string]: {
    isButton: boolean;
    isNav: boolean;
    hasAddButton?: boolean;
    addButtonText?: string;
    isFixed?: boolean;
  };
};

export const footerType = (params: Params): TFooterType => ({
  "/login": {
    isButton: true,
    isNav: false,
    hasAddButton: true,
    addButtonText: "회원가입",
  },
  "/signup": { isButton: true, isNav: false },
  "/mypage": { isButton: false, isNav: true, isFixed: true },
  "/solplace-logs/new": { isButton: true, isNav: false },
  "/solplace-logs": { isButton: false, isNav: true, isFixed: true },
  [`/solplace-logs/${params.solplaceLogId}`]: { isButton: false, isNav: false },
  [`/solplace-logs/${params.solplaceLogId}/edit`]: {
    isButton: true,
    isNav: false,
  },
});
