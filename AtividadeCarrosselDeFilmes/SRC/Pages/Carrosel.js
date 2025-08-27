import { StatusBar } from "expo-status-bar";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';
import axios from 'axios';


export default function Carrosel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ca241198e38af2ff0109fa33bb8453f&language=pt-BR&page=1"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.release_date}</Text>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{ width: 120, height: 180 }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
