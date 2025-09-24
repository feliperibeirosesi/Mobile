import { Image } from "react-native";

export default function ImageComponents() {
  return (
    <Image
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      accessibilityLabel="React Native Logo"
      style={{ width: 50, height: 50 }}
      testID="image-logo"
    />
  );
}
