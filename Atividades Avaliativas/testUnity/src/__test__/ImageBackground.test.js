import { render } from "@testing-library/react-native";

import ImageBackgroundExample from "../components/ImageBackground";

test("Verificar se as mensagens do ImageBackgroundExample estão aparecendo", () => {

  const { getByText } = render(<ImageBackgroundExample />)

  expect(getByText("Texto sobre a imagem!")).toBeTruthy()
})
