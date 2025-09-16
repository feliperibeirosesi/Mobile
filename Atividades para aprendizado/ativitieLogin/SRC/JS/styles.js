import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#052659",
  },
  title: {
    color: "white",
    position: "absolute",
    top: 250,
    fontSize: 40,
  },
  container1: {
    flex: 1,
    backgroundColor: "#052659",
    alignItems: "center",
    justifyContent: "center",
  },
  Image1: {
    width: 300,
    height: 300,
    position: "absolute",
    top: 5,
  },
  container2: {
    width: "100%",
    height: "50%",
    backgroundColor: "#5483b3",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopRightRadius: 40,
    borderTopStartRadius: 40,
  },
  error: {
    color: "red",
    position: "absolute",
    top: 230,
    fontSize: 20,
  },
  menuContainer: {
    backgroundColor: "#7546e8",
    width: 380,
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    gap: 50,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalMenu: {
    backgroundColor: "#c8b3f6",
    width: 250,
    height: 250,
    borderRadius: 20,
    position: "absolute",
    bottom: "30%",
    color: "white",
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
  },
  text: {
    color: "white",
    position: "absolute",
    bottom: 20,
    left: "25%",
  },
});
