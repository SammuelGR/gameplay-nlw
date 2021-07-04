import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 48,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 25,
    marginBottom: 42,
  },
  profileImgBackground: {
    height: 48,
    width: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    height: 46,
    width: 46,
    borderRadius: 8,
  },
  greetings: {
    marginHorizontal: 20,
    alignSelf: "flex-start",
    flex: 1,
  },
  greetingsRow: {
    flexDirection: "row",
  },
  greetingsTitle: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
  },
  greetingsBold: {
    fontFamily: theme.fonts.title700,
  },
  greetingsSubtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    lineHeight: 17,
  },
  headerButton: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

export default styles;
