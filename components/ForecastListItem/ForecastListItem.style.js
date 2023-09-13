import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {},
  date: {},
  temperature: { minWidth: 50, textAlign: "right" },
});
