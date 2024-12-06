import { useApis } from "@/apis";
import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const URI = "172.16.0.26";

export default function 나의시작화면() {
  const webviewRef = useRef<WebView>(null);
  const { onRequest, layout } = useApis(webviewRef);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }} // 안드로이드 + IOS 노치 배경색
      edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
    >
      <StatusBar
        style="dark" // 안드로이드 + IOS 노치 글자색
      />
      <WebView
        ref={webviewRef}
        source={{ uri: `http://${URI}:3000/solplace-logs/` }}
        onMessage={(e) => {
          if (!e.nativeEvent.data) return;

          const request = JSON.parse(e.nativeEvent.data);
          onRequest(request.query, request.variables);
        }}
        setBuiltInZoomControls={layout?.isPinchZoom}
      />
    </SafeAreaView>
  );
}
