import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  firViw: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  back: {
    bottom: 130,
    right: 160,
    backgroundColor: "#3d3e40",
    borderRadius: 10,
  },

  secViw: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#e23260",
  },

  menuOfName: {
    bottom: 60,
    right: 90,
  },

  menuOfCard: {
    flexDirection: "row",
    gap: 20,
    bottom: 120,
    right: 60,
  },

  menuOfPrice: {
    flexDirection: "row",
    gap: 30,
    bottom: 60,
  },

  firImg: {
    width: 70,
    height: 70,
    bottom: -50,
    borderRadius: 20,
  },

  text: {
    color: "#gray",
    fontSize: 20,
    top: 170,
  },

  inexistent: {
    flex: 1,
    backgroundColor: "transparent",
    resizeMode: "cover",
  },

  secondPart: {
    flex: 1,
    backgroundColor: "#e23260",
  },

  end: {
    backgroundColor: "411e57",
    flexDirection: "row",
    gap: 40,
  }
});
