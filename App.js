//App.js
import { StatusBar } from "expo-status-bar";
import PagerView from "react-native-pager-view";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import { useState, useEffect, useRef, useMemo } from "react";
import { View } from "react-native";
import { styles } from "./styles/app";
import TabIndicator from "./components/TabIndicator";

export default function App() {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState("center");
  const prevPage = useRef(1);

  const handlePageChange = (e) => {
    const next = e.nativeEvent.position;

    if (next > prevPage.current) {
      setDirection("right");
    } else if (next < prevPage.current) {
      setDirection("left");
    } else {
      setDirection("center");
    }

    setPage(next);
    prevPage.current = next; // ✅ Move after
  };

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        style={styles.pagerView}
        initialPage={1}
        offscreenPageLimit={3}
        pageMargin={-50}
        onPageSelected={handlePageChange}
      >
        <Screen2 key="2" />
        <Screen1 key="1" />
        <Screen3 key="3" />
      </PagerView>
      <TabIndicator currentPage={page} count={3} />
      <StatusBar style="auto" />
    </View>
  );
}
