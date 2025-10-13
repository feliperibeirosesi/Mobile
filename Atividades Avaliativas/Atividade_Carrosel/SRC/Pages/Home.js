import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from '../Styles/Styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

