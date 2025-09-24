// fireEvent -> Função para simular interações do usuários com os componentes
import { render, fireEvent } from "@testing-library/react-native";

//importar o componente a ser testado!
import InputComponents from "../components/Input";

test("Atualiza o texto value ao digitar no TextInput", () => {

  const { getByTestId, getByText } = render(<InputComponents />)

  // getByTestId("") -> procura pelo testID que definimos no componente
  const input = getByTestId("campo-input");

  //fireEvent.changeText... -> ele está simulando o que a pessoa digitou
  fireEvent.changeText(input, "Olá Mundo!");

  //expect -> mostra se o que a pessoa escreveu condiz com o que foi passado para ela
  expect(getByText("Olá Mundo!")).toBeTruthy();
})
