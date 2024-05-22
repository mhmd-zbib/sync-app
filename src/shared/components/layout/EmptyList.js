import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Typography from "../ui/Typography";
import { useTheme } from "../../stores/themeStore";

const EmptyList = ({ title }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // height: ,
        // backgroundColor: "red",
      }}>
      <Ionicons name="newspaper" size={72} color={theme.accent} />
      <View style={{ alignItems: "center" }}>
        <Typography style={{ textAlign: "center" }} color={theme.textAccent}>
          No {title} found!
        </Typography>
      </View>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
