import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../Typography";
import ItemCard from "../cards/ItemCard";
import { useTheme } from "../../../stores/themeStore";
import { MaterialIcons } from "@expo/vector-icons";

const CardButton = ({ title, value, onPress }) => {
  const theme = useTheme();

  return (
    <ItemCard
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Typography>{title}</Typography>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 14,
        }}>
        <Typography
          variant="sm"
          style={{
            backgroundColor: theme.accent,
            borderRadius: 50,
            padding: 4,
            paddingHorizontal: 8,
          }}>
          {value}
        </Typography>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={theme.textSecondary}
        />
      </View>
    </ItemCard>
  );
};

export default CardButton;

const styles = StyleSheet.create({});
