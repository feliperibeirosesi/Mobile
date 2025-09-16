import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { styles } from '../JS/style';
import { BlurView } from 'expo-blur';


//importar paginas
import Cadastro from './Cadastro';

//import icons
import Feather from '@expo/vector-icons/Feather';
export default function Home({ navigation }) {
  return (
    <ImageBackground source={require('../IMG/WoodmanHouse.jpg')} style={styles.background}>

      <View style={styles.wrapper}>
        <BlurView intensity={100} tint="light" style={styles.HomeBlur}>
          <View style={styles.wrapper}>
            <Feather name="headphones" size={74} color="#cfbea7" />
            <Text style={{ fontSize: 50, color: "#5b7573" }}>Bem vindo!</Text>
            <Text style={{ fontSize: 20, color: "#475b5a" }}>Ouça suas musicas aqui!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={{ backgroundColor: "#965D42", bottom: '-50', padding: 10, borderRadius: 20 }}>
              <Text style={{ fontSize: 25, color: '' }}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.div2}>
            <Text>Ainda não se cadastrou?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue" }}>Login</Text>
            </Pressable>
          </View>

        </BlurView>
      </View>
      <StatusBar hidden />
    </ImageBackground >

  );
}


