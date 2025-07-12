import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { tabIndicatorStyles as styles } from "../styles/tabIndicator";

export default function TabIndicator({ count, currentPage }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, i) => (
        <Dot
          key={`dot-${i}`}
          isActive={currentPage === i}
          dotIndex={i}
          currentPage={currentPage}
        />
      ))}
    </View>
  );
}

function Dot({ isActive, dotIndex, currentPage }) {
  const width = useSharedValue(8);
  const height = useSharedValue(8);
  const scaleX = useSharedValue(1);
  const translateX = useSharedValue(0);
  const borderRadius = useSharedValue(4);
  const opacity = useSharedValue(0.6);

  useEffect(() => {
    const directionToMe =
      dotIndex < currentPage
        ? "left"
        : dotIndex > currentPage
        ? "right"
        : "center";

    if (isActive) {
      width.value = withSpring(16, { damping: 14, stiffness: 200 }); // was 12
      height.value = withSpring(10, { damping: 14 });
      scaleX.value = withSpring(1.6); // was 1.4
      borderRadius.value = withSpring(4); // less rounded
      opacity.value = withTiming(1, { duration: 120 });

      // simulate directional grow
      translateX.value = withTiming(
        directionToMe === "left" ? 4 : directionToMe === "right" ? -4 : 0,
        { duration: 180 }
      );
    } else {
      width.value = withSpring(8);
      height.value = withSpring(8);
      scaleX.value = withSpring(1);
      borderRadius.value = withSpring(4);
      opacity.value = withTiming(0.4, { duration: 180 });
      translateX.value = withTiming(0, { duration: 180 });
    }
  }, [isActive, dotIndex, currentPage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    height: height.value,
    transform: [
      { translateX: translateX.value },
      { scaleX: scaleX.value },
    ],
    borderRadius: borderRadius.value,
    opacity: opacity.value,
  }));

  return (
    <View style={styles.dotWrap}>
      <Animated.View
        style={[
          styles.dotBase,
          isActive && styles.dotActiveColor,
          animatedStyle,
        ]}
      />
    </View>
  );
}
