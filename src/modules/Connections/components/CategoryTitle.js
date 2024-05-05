import React from "react";
import Button from "../../../shared/components/ui/buttons/Button";
import { View } from "react-native";

const CategoryTitle = ({ setCategory, activeCategory }) => {
  const categories = [
    { title: "All Connections", value: "contacts" },
    { title: "Groups", value: "groups" },
  ];

  return (
    <View style={{ flexDirection: "row", gap: 15 }}>
      {categories.map((category) => (
        <Button
          key={category.value}
          size="sm"
          title={category.title}
          onPress={() => setCategory(category.value)}
          variant={activeCategory === category.value ? "primary" : "secondary"}
        />
      ))}
    </View>
  );
};

export default CategoryTitle;
