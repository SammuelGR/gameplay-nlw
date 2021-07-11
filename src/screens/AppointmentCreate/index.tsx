import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { CategoryList } from "../../components/contexts/CategoryList/CategoryList";

import { theme } from "../../global/styles/theme";
import styles from "./styles";

export const AppointmentCreate = () => {
  const [serverIcon, setServerIcon] = useState("");

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Agendar partida",
      headerShown: true,
      headerBackground: () => (
        <LinearGradient
          style={{ flex: 1 }}
          colors={[theme.colors.secondary70, theme.colors.secondary40]}
        />
      ),
      headerTintColor: theme.colors.heading,
      headerTitleStyle: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
      },
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Text style={styles.title}>Categoria</Text>

        <CategoryList />

        <View style={styles.selectServerContainer}>
          <View style={styles.selectServerIconContainer}>
            <Image
              source={{ uri: serverIcon.length > 0 ? serverIcon : undefined }}
              style={styles.selectServerIcon}
            />
          </View>

          <View style={styles.selectServerTitleContainer}>
            <Text style={styles.title}>Selecione um servidor</Text>
          </View>

          <View style={styles.selectServerArrow}>
            <Feather
              name="chevron-right"
              size={16}
              color={theme.colors.highlight}
            />
          </View>
        </View>

        <View style={styles.scheduleContainer}>
          <View>
            <Text style={styles.title}>Dia e mês</Text>

            <View style={styles.timeContainer}>
              <TextInput style={styles.timeTextInput} />
              <Text style={styles.inputSeparator}>/</Text>
              <TextInput style={styles.timeTextInput} />
            </View>
          </View>

          <View>
            <Text style={styles.title}>Hora e minuto</Text>

            <View style={styles.timeContainer}>
              <TextInput style={styles.timeTextInput} />
              <Text style={styles.inputSeparator}>:</Text>
              <TextInput style={styles.timeTextInput} />
            </View>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionContainerTitle}>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.descriptionSubtitle}>Max 100 caracteres</Text>
          </View>

          <TextInput style={styles.descriptionTextInput} />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={styles.submitButtonText}>Agendar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
