type TIcons = {
  [key: string]: {
    src: string;
    alt: string;
  };
};

type TImages = TIcons;

export const ICONS: TIcons = {
  logo: {
    src: "/icons/logo.svg",
    alt: "로고",
  },
  rightArrow: {
    src: "/icons/right_arrow.svg",
    alt: "오른쪽 화살표",
  },
  leftArrow: {
    src: "/icons/left_arrow.svg",
    alt: "왼쪽 화살표",
  },
  downArrow: {
    src: "/icons/down_arrow.svg",
    alt: "아래 화살표",
  },
  addImageS: {
    src: "/icons/add_image_s.svg",
    alt: "이미지 추가 s",
  },
  addImageM: {
    src: "/icons/add_image_m.svg",
    alt: "이미지 추가 m",
  },
  location: {
    src: "/icons/location_icon.svg",
    alt: "위치 아이콘",
  },
  delete: {
    src: "/icons/close_icon.svg",
    alt: "사진 삭제하기 아이콘",
  },
  mapMarker: {
    src: "/icons/map_marker.svg",
    alt: "맵 마커",
  },
  edit: {
    src: "/icons/edit.svg",
    alt: "수정하기 아이콘",
  },
  locationActive: {
    src: "/icons/location_active.svg",
    alt: "플레이스 활성",
  },
  locationInactive: {
    src: "/icons/location_inactive.svg",
    alt: "플레이스 비활성",
  },
  mypageActive: {
    src: "/icons/mypage_active.svg",
    alt: "마이페이지 활성",
  },
  mypageInactive: {
    src: "/icons/mypage_inactive.svg",
    alt: "마이페이지 비활성",
  },
  solplaceLogsNewFloating: {
    src: "/icons/new_floating.svg",
    alt: "플로팅 아이콘",
  },
};

export const IMAGES: TImages = {
  detailDefaultImage: {
    src: "/images/detail_default_image.png",
    alt: "기본 상세 이미지",
  },
};
