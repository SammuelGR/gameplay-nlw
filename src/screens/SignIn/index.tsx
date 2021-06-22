import React from "react";
import { Image, StatusBar, Text, View } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import ButtonIcon from "../../components/ButtonIcon";

import styles from "./styles";

const SignIn = () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Image resizeMode="stretch" style={styles.image} source={IllustrationImg} />

    <View style={styles.content}>
      <Text style={styles.title}>
        Organize {`\n`}
        suas jogatinas {`\n`}
        facilmente
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>

      <ButtonIcon onPress={() => {}} title="Entrar com Discord" />
    </View>
  </View>
);

export default SignIn;
