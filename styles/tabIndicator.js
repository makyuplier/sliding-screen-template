import { StyleSheet } from 'react-native';

export const tabIndicatorStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 999,
  },
  dotWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotBase: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666', // 🔹 darker dot color
  },
  dotActiveColor: {
    backgroundColor: '#000', // 🔹 pill color (unchanged)
  },
});
