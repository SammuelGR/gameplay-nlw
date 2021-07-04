import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../../../utils/categories";

import styles from "./styles";

export const CategoryList = () => {
  return (
    <ScrollView
      style={styles.containerList}
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          Icon={category.icon}
        />
      ))}
    </ScrollView>
  );
};
