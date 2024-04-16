import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../../components/Text.js/Typography";
import { useTheme } from "../../../stores/themeStore";

const ContactSection = ({ name }) => {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.accent }}>
      <Typography>{name}</Typography>
    </View>
  );
};

export default ContactSection;

const styles = StyleSheet.create({});
