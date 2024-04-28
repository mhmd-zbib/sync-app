import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";
import Typography from "../Typography";
import { useTheme } from "../../../stores/themeStore";

const NoteCard = ({ variant, title, description, date, children }) => {
  const theme = useTheme();
  return (
    <ItemCard variant={variant} style={{ flex: 1 }}>
      <Typography numberOfLines={1} color={theme.textSecondary}>
        {date}
      </Typography>
      <Typography
        style={{ marginTop: 8, marginBottom: 2 }}
        numberOfLines={1}
        fontWeight={"500"}
        variant="xlg">
        {title}
      </Typography>
      <Typography numberOfLines={3}>{description}</Typography>
      {children}
    </ItemCard>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});
