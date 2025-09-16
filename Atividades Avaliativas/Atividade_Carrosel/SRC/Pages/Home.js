import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, useWindowDimensions, Image } from 'react-native';

import styles from '../Styles/Styles';

import Onboarding from 'react-native-onboarding-swiper';

export default function Home({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList renderItem={({ item }) => <OnboardingItem item={item} />} />
      <Image source={item.image} />
      <StatusBar style="auto" />
    </View>
  );
}
