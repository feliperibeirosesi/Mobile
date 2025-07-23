export default function Logout({ navigation, route }) {
  // Receber a função de logout via route.params ou contexto

  const logout = route.params?.logout;

  return (
    <View>
      <Text>Você realmente quer sair?</Text>
      <Button
        title="Confirmar Logout"
        onPress={() => {
          if (logout) logout(); // atualiza isLoggedIn = false
          // ou navigation.reset() só se Login estiver dentro do Drawer (não é o caso)
        }}
      />
    </View>
  );
}
