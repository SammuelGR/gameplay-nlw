import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from "../../assets/illustration.png";
import DiscordSvg from "../../assets/discord.svg";

import ButtonIcon from "../../components/ButtonIcon";

import styles from "./styles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={IllustrationImg}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          Icon={DiscordSvg}
          onPress={() => navigation.navigate("Home")}
          title="Entrar com Discord"
        />
      </View>
    </View>
  );
};

export default SignIn;
