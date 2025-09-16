import { TextInput } from "react-native";


export default function Input({ placeholder, password, estilo, valor, funcao }) {
  return (
    <TextInput
      style={estilo}
      placeholder={placeholder}
      placeholderTextColor={"#af99c4"}
      secureTextEntry={password}
      value={valor}
      onChangeText={funcao}
    />
  );
}
