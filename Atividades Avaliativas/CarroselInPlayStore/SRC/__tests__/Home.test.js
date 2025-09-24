import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Home from "../Pages/Home";

// mock navigation
const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

test("Verificação para ver se o botão leva para a próxima página", async () => {
  const { getByText } = render(<Home />);

  // espera o botão ser renderizado
  const button = await waitFor(() => getByText("Ver Filme"));

  fireEvent.press(button);

  expect(mockNavigate).toHaveBeenCalled();
});
