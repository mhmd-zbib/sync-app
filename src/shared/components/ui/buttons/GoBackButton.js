import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/themeStore";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const GoBackButton = ({ onPress }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={{
        alignSelf: "center",
        backgroundColor: theme.secondary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        // width: 32,
        // height: 32,
        // marginRight: 50,
        padding: 8,
      }}>
      <MaterialIcons
        name="arrow-back-ios-new"
        size={20}
        color={theme.textAccent}
      />
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({});
