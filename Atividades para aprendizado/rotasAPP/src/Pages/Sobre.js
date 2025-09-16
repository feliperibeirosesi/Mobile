import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/styles';
import { useNavigation } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';


export default function Sobre() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Essa é a Sobre</Text>

      <Button title="H O M E" onPress={() => navigation.goBack("Home")} />
      {/* <TouchableOpacity style={{
        width: 48,
        height: 48,
        borderRadius: 48,
        backgroundColor: "#dfb6b2",
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        top: 30,
        left: 20
      }} onPress={() => navigation.openDrawer()}>
        <AntDesign name="menuunfold" size={24} color="black" />
      </TouchableOpacity> */}
      < StatusBar hidden={true} />
    </View>
  );
}
//O grande comentário só funciona com o drawn

