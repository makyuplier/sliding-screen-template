import { View, Text } from 'react-native';
import { styles } from '../styles/screens';

export default function Screen1({ currentPage }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
}
