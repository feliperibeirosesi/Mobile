import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import { useState, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';
import axios from 'axios';

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

// Componente para cada imagem
function Photo({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, [index - 1, index, index + 1], [1.6, 1, 1.6])
        },
        {
          rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [15, 1, -15])}deg`
        }
      ]
    }
  });

  return (
    <View style={{
      width: imageWidth,
      height: imageHeight,
      overflow: 'hidden',
      borderRadius: 20
    }}>
      <Animated.Image
        source={{ uri: item.src.large }}
        style={[{ flex: 1 }, stylez]}
      />
    </View>
  );
}

function BackdropPhoto({ photo, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index, index + 1], [0, 1, 0])
    }
  })

  return (
    <Animated.Image source={{ uri: photo.src.large }} style={[StyleSheet.absoluteFillObject, stylez]} />
  );
}

export default function App() {
  const [data, setData] = useState({ photos: [] });

  // Valor compartilhado para animação
  const scrollX = useSharedValue(0);

  // Handler para capturar scroll da lista
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (imageWidth + spacing);
  });

  // Buscar dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent('mobile wallpaper')}&orientation=portrait`,
        {
          headers: { Authorization: 'PWpUiBJHuXcddH1a4pgHCsOge2L6Dnjs6AnzJ2Q8TKCD2o4yKB0a0DdP' }
        }
      );
      setData(res.data);
    } catch (error) {
      console.log("Erro ao importar as imagens ", error);
    }
  };

  // Tela de carregamento
  if (data.photos.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando....</Text>
      </View>
    );
  }

  // Render principal
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.photos.map((photo, index) => (
          <BackdropPhoto key={photo.id} photo={photo} index={index} scrollX={scrollX} />
        ))}
      </View>

      <Animated.FlatList
        data={data.photos}
        keyExtractor={(item) => String(item.id)}
        horizontal
        style={{ flexGrow: 0 }}
        snapToInterval={imageWidth + spacing}
        decelerationRate={"fast"}
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2
        }}
        renderItem={({ item, index }) => (
          <Photo item={item} index={index} scrollX={scrollX} />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos globais
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
