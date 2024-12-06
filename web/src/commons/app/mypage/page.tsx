import Footer from "@/commons/layout/footer";
import MyPageToggleSection from "@/components/domains/mypage/toggle-section";

export default function MyPage() {
  return (
    <main>
      <MyPageToggleSection />
      {/* <div style={{ width: "calc(100%)" }}>
          <Divider />
        </div> */}

      {/* <MyPageToggleSection subTitle="알림 권한" /> */}

      <Footer buttonText="" />
    </main>
  );
}
