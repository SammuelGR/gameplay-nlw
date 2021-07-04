import React, { FunctionComponent } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import styles from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  Icon: FunctionComponent;
}

const ButtonIcon = ({ title, onPress, Icon }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Icon />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
