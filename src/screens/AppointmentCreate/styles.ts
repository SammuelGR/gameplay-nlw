import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    marginBottom: 12,
  },

  selectServerContainer: {
    width: "100%",
    height: 68,
    marginTop: 32,
    marginBottom: 28,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectServerIconContainer: {
    height: 68,
    width: 68,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    overflow: "hidden",
  },
  selectServerIcon: {
    height: 68,
    width: 68,
  },
  selectServerTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -12,
    marginLeft: 35,
  },
  selectServerArrow: {
    height: 68,
    width: 68,
    justifyContent: "center",
    alignItems: "center",
  },

  scheduleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeTextInput: {
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
  },
  inputSeparator: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
    fontSize: 15,
    lineHeight: 20,

    marginHorizontal: 4,
  },

  descriptionContainer: {
    marginBottom: 56,
  },
  descriptionContainerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionSubtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.highlight,
  },
  descriptionTextInput: {
    height: 95,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
  },

  submitButton: {
    height: 56,
    width: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    lineHeight: 25,
    color: theme.colors.heading,
  },
});

export default styles;
