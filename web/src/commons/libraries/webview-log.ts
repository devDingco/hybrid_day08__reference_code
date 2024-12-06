"use server";

export const webviewlog = (message) => {
  console.log(message); // Next 서버에서 로그 찍기 => 안드로이드에뮬레이터는 안의 웹뷰의 로그까지 보여주진 않음(웹뷰는 개발자도구도 없음)
};
