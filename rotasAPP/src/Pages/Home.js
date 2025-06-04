import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { styles } from '../Styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Essa é a home</Text>

      <Button title="S O B R E" onPress={() => navigation.navigate("Sobre")} />
      < StatusBar hidden={true} />
    </View>
  );
}

