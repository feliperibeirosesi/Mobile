import AsyncStorage from "@react-native-async-storage/async-storage";

// Chave que você vai usar
const NAME_KEY = "@userName";

// Salvar nome
export const saveName = async (name) => {
  try {
    await AsyncStorage.setItem(NAME_KEY, name);
  } catch (error) {
    console.log("Erro ao salvar nome:", error);
    throw error;
  }
};

// Ler nome
export const getName = async () => {
  try {
    const name = await AsyncStorage.getItem(NAME_KEY);
    return name || "";
  } catch (error) {
    console.log("Erro ao ler nome:", error);
    return "";
  }
};

// Remover nome
export const removeName = async () => {
  try {
    await AsyncStorage.removeItem(NAME_KEY);
  } catch (error) {
    console.log("Erro ao remover nome:", error);
  }
};
