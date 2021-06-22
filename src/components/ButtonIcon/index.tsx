import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import DiscordImg from "../../assets/discord.png";

import styles from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

const ButtonIcon = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
