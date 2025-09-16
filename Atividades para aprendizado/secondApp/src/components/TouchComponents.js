import { styles } from "../styles/styles";
import { Text, TouchableOpacity } from "react-native";

export default function ClickBtn({ FuncBtn, txt }) {
  return (
    <TouchableOpacity onPress={FuncBtn}>
      <Text>{txt}</Text>
    </TouchableOpacity>
  );
}
