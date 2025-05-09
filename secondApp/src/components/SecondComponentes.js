import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export function Second() {
  return <Text style={styles.text}>Segundo componente yupiii</Text>;
}

export function Third({ children }) {
  return (
    <>
      <Text>Terceiro componente</Text>
      {children} {/*esse comando serve para permitir textos filhos */}
    </>
  );
}
