import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { CategoryList } from "../../components/contexts/CategoryList/CategoryList";

import { theme } from "../../global/styles/theme";

import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          style={styles.profileImgBackground}
          colors={[theme.colors.secondary20, theme.colors.secondary60]}
        >
          <Image
            style={styles.profileImg}
            source={{ uri: "https://github.com/sammuelgr.png" }}
          />
        </LinearGradient>

        <View style={styles.greetings}>
          <View style={styles.greetingsRow}>
            <Text style={styles.greetingsTitle}>Olá, </Text>
            <Text style={[styles.greetingsTitle, styles.greetingsBold]}>
              Sammuel
            </Text>
          </View>
          <Text style={styles.greetingsSubtitle}>Hoje é dia de vitória</Text>
        </View>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate("AppointmentCreate")}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="plus" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>

      <CategoryList />
    </View>
  );
};

export default Home;
