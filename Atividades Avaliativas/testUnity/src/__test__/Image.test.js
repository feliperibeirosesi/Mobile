import { render } from "@testing-library/react-native";

import ImageComponents from "../components/image";

test("Verificar o componente imagem e suas Propriedades", () => {

  const { getByTestId } = render(<ImageComponents />);
  const image = getByTestId("image-logo");

  expect(image.props.source.uri).toBe("https://reactnative.dev/img/tiny_logo.png");
  expect(image.props.accessibilityLabel).toBe("React Native Logo")
})
