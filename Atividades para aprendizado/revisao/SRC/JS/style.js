import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeBlur: {
    width: "75%",
    height: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    borderRadius: 20,
    position: "absolute",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  div2: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  //cadastro
  menuCadastro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  CadastroBlur: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerCadastro: {
    top: -90,
    marginTop: -100, // ajustável conforme necessário
    paddingHorizontal: 20,
  },

  tituloCadastro: {
    fontSize: 28,
    color: '#B39AB0',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtituloCadastro: {
    fontSize: 16,
    color: '#cab8c8',
  },

  //Input do cadastro
  inputsCadastro: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Input: {
    width: "60%",
    margin: 10,
    borderRadius: 10,
    borderBottomColor: '#2F3594',
    borderBottomWidth: 2,
    color: "#af99c4"
  },
  buttonCadastro: {
    bottom: -40
  },
});
