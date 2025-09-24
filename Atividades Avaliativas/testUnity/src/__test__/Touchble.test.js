import { render, fireEvent } from "@testing-library/react-native";

import TouchComponents from "../components/Touch";

test("Chamar a função ap pressionar o TouchbleOpacity", () => {


  const mockFn = jest.fn();

  const { getByText } = render(<TouchComponents on onPress={mockFn} />)

  fireEvent.press(getByText("Pressione"));

  // toHaveBeenCalled() -> Verificar se uma função doi executada!
  expect(mockFn).toHaveBeenCalled();
})
