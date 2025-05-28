import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aac3df',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    backgroundColor: "#f0ccbd",
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    gap: 50,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMenu: {
    backgroundColor: '#f7a932',
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
  },
  text: {
    color: "white",
    position: "absolute",
    bottom: 20,
    left: "25%"
  },

});
