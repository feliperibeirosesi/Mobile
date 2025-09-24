// Importa o simulador de components
import { render } from "@testing-library/react-native";

// Importa o componente que vamos testar
import TextComponents from "../components/text";

// test() -> Define um teste unitário
// "Descrição" -> Um texto que explica o que vamos testar
test("Renderiza o textocorretamente", () => {

  // render -> Renderiza o componente em memória (ambiente de teste), não no app real.
  // e retorna métodos para buscar elementos (getByTestId, getByText...)
  const { getByText } = render(<TextComponents />);

  //getByText -> Procura um texto visivel.

  //toBeTruthy -> Verificar se o elemento existe!
  expect(getByText("Meu primeiro teste!")).toBeTruthy();
})

