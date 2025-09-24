import { TouchableOpacity, Text } from "react-native";

export default function TouchComponents({ onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Pressione</Text>
    </TouchableOpacity>
  );
}
