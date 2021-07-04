import { StyleSheet } from "react-native";

import { theme } from "../../../../global/styles/theme";

const styles = StyleSheet.create({
  containerBorder: {
    height: 120,
    width: 104,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  containerInner: {
    height: 118,
    width: 102,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,

    marginTop: 16,
  },
});

export default styles;
