import React, { FC } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../../../global/styles/theme";

import styles from "./styles";

type CategoryType = {
  title: string;
  Icon: FC<SvgProps>;
  onPress?: () => void;
};

export const Category = ({ title, Icon, onPress }: CategoryType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        style={styles.containerBorder}
        colors={[theme.colors.secondary50, theme.colors.secondary60]}
      >
        <LinearGradient
          style={styles.containerInner}
          colors={[theme.colors.secondary70, theme.colors.secondary40]}
        >
          <Icon />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
