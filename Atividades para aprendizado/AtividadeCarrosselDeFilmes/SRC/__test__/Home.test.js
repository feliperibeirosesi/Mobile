import react from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import Home from '../Pages/Home';

// Estou importando o removeItem do meu AsyncStorage
import { removeName } from "../Components/AsyncStorage";
import { getName } from '../Components/AsyncStorage';
import { useNavigation } from '@react-navigation/native';

//funções para simular o push
const mockNavigate = jest.fn();
const mockPush = jest.fn();
const mockGoBack = jest.fn();

// substituindo o comportamento real do useNavigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    push: mockPush,
    goBack: mockGoBack
  })
}))

//substituindo a função
jest.mock("../Components/AsyncStorage.js", () => ({
  removeName: jest.fn(),
  getName: jest.fn(() => "Usuario")
}))

jest.mock("")

// ele agrupa testes
describe("Test Home Screen", () => {

  beforeEach(() => {
    mockNavigate.mockClear();
    mockPush.mockClear();
    mockGoBack.mockClear();
    removeName.mockClear();
    getName.mockClear();
  })

  it("Renderiza o titulo corretamente", () => {
    const { getByText } = render(<Home />);
    expect(getByText(`Olá Usuario, Seja bem vindo`)).toBeTruthy();
  })

  it("Navega para ver os filmes", () => {
    const { getByText } = render(<Home navigation={{ navigate: mockNavigate, goBack: mockGoBack }} />);
    const btn = getByText("Ver Filme");

    fireEvent.press(btn);

    expect(mockNavigate).toHaveBeenCalledWith("Carrosel");
  })

  it("Chamar removeItem e navegar para a tela de login", async () => {
    const { getByText } = render(<Home navigation={{ navigate: mockNavigate, goBack: mockGoBack }} />);
    const btnSair = getByText("Log-out");

    fireEvent.press(btnSair)

    await waitFor(() => {
      expect(removeName).toHaveBeenCalledWith("name");
      expect(mockGoBack).toHaveBeenCalledWith("name");
      expect(getName).toHaveBeenCalledWith("name")
      expect(mockPush).toHaveBeenCalledWith("Login");
    })
  })
})
