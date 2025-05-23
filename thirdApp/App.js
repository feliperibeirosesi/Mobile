import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, Image, Pressable, View, TouchableOpacity } from 'react-native';
import { styles } from "./Style/style";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';

export default function App() {
  const [timesPressed, setTimesPressed] = useState(1);

  return (
    <ImageBackground style={styles.container} source={require("./assets/DrinkWall.jpg")}>
      <View style={styles.firViw}>
        <TouchableOpacity style={styles.back}>
          <AntDesign name="arrowleft" size={45} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.secViw}>
        <View style={styles.menuOfName}>
          <Text style={{ fontSize: 20, color: "#1e3309" }}>StrawBarry with oranges</Text>
          <Text style={{ fontSize: 15, color: "#143a02" }}>Fresh Drink</Text>
        </View>

        <View style={{ backgroundColor: "#191b37", bottom: 160, left: 150, alignItems: 'center', padding: 10, borderRadius: 10 }}>
          <Pressable onPress={() => {
            setTimesPressed(current => Math.min(10, current + 1));
            console.log("Mais");
          }}>
            <AntDesign name="plus" size={30} color="white" />
          </Pressable>

          {timesPressed > 0 && (
            <Text style={{ color: "white", marginVertical: 5 }}>
              {timesPressed}
            </Text>
          )}

          <Pressable onPress={() => {
            setTimesPressed(current => Math.max(1, current - 1));
            console.log("Menos");
          }}>
            <AntDesign name="minus" size={30} color="white" />
          </Pressable>
        </View>

        <View style={styles.menuOfCard}>
          <View style={styles.card}>
            <Text style={{ color: "#849a28" }}>15%</Text>
            <Text style={{ color: "#849a28" }}>Lemon</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: "#849a28" }}>20%</Text>
            <Text style={{ color: "#849a28" }}>Strawbarry</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: "#849a28" }}>65%</Text>
            <Text style={{ color: "#849a28" }}>Water</Text>
          </View>
        </View>

        <View style={styles.menuOfPrice}>
          <View style={{ flexDirection: "row", gap: 10, backgroundColor: "#f966ab", padding: 10, borderRadius: 10 }}>
            <Text style={{ color: "#fff" }}>R$8</Text>
            <Text style={{ color: "#fff" }}>Normal price</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, backgroundColor: "#f966ab", padding: 10, borderRadius: 10 }}>
            <Text style={{ color: "#fff" }}>R$10</Text>
            <Text style={{ color: "#fff" }}>Price x Menta</Text>
          </View>
        </View>

        <View style={styles.end}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text ><FontAwesome5 name="glass-martini-alt" size={24} color="#de5c8f" /></Text>
            <Text>Total Carrinho</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#de5c8f" }}>32</Text>
            <Text>Preço total</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#191b37", borderRadius: 10, width: 80 }}>
            <Image style={{ width: 70, height: 50 }} source={require("./assets/Mastercard-Simbolo.jpg")} />
            <Text style={{ color: "white" }}>Pay</Text>
          </View>
        </View>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
