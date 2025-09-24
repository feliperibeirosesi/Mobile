import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, ImageBackground } from "react-native";

const { width } = Dimensions.get("window");

export default function Carrosel() {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState();


  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 90 });

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentMovie(viewableItems[0].item);
    }
  });

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ca241198e38af2ff0109fa33bb8453f&language=pt-BR&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentMovie(data.results[0]);
        setMovies(data.results)
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <ImageBackground
      source={{ uri: `https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}` }}
      resizeMode="cover"
      style={{ flex: 1, paddingVertical: 20, }}
      blurRadius={1} // dá um efeito de "cartaz borrado" atrás
    >

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: width * 0.8,
              marginHorizontal: width * 0.1 / 2,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{
                width: "100%",
                height: 400,
                borderRadius: 20,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#aaa" }}>{item.release_date}</Text>
          </TouchableOpacity>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </ImageBackground>
  );
}
