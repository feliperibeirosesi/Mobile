import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 450,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,

  },
  filter: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: 'center',
    marginBottom: 10
  },
  text: {
    marginRight: 10,
  }
});
