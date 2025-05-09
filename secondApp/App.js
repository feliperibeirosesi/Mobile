// Importa o componente StatusBar do Expo, usado para controlar a aparência da barra de status do dispositivo
import { StatusBar } from "expo-status-bar";

// Importa os componentes básicos do React Native: Text (texto), View (container visual) e Button (botão)
import { Text, View, Button } from "react-native";

// Importa o objeto de estilos personalizados definido em outro arquivo
import { styles } from "./src/styles/styles"; // aqui estou importando o código styles

// Importa os componentes Second e Third do arquivo SecondComponentes.js
import { Second, Third } from "./src/components/SecondComponentes.js"; // aqui estou importando o código secondcomponent

// Importa um componente personalizado de toque chamado ClickBtn
import ClickBtn from "./src/components/TouchComponents.js";

// Função principal do app, que será exportada como o componente principal
export default function App() {
  // Cria uma função chamada 'save' que será executada ao clicar no botão
  const save = () => {
    alert("Salvar"); // Exibe um alerta com a palavra "Salvar"
  };

  // Retorna a estrutura da interface do aplicativo
  return (
    <View style={styles.container}>
      {/* Container principal com estilo aplicado */}
      <Text>Habos babosh</Text> {/* Texto simples exibido na tela */}
      <Third>
        {/* Componente personalizado que aceita elementos filhos */}
        <Text>Esse é um elemento filho do Third</Text>
        {/* Filho dentro do componente Third */}
      </Third>
      <StatusBar style="auto" /> {/* Barra de status com estilo automático */}
      <FirstComponent /> {/* Componente local chamado FirstComponent */}
      <Second /> {/* Componente importado chamado Second */}
      {/* Botão personalizado (ClickBtn) que executa a função 'save' ao ser clicado, com o texto "Salvar" */}
      <ClickBtn FuncBtn={save} txt="Salvar" />
    </View>
  );
}

// Componente local que retorna um texto dentro de uma View
const FirstComponent = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};
