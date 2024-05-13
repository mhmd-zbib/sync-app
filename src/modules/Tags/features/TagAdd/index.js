import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import { Octicons } from "@expo/vector-icons";
import { hexToRGBA } from "../../../../shared/hooks/useHexToRgb";

const tagColors = {
  red: "#FF0000",
  blue: "#2986CC",
  green: "#8fce00",
  yellow: "#f1c232",
  teal: "#00b894",
  purple: "#674ea7",
  orange: "#e67e22",
};
const TagAddScreen = () => {
  const color = tagColors.orange;

  return (
    <InputPageLayout buttonTitle={"Add"} screenTitle={"Add New Tag"}>
      <Octicons
        name="tag"
        size={50}
        color={color}
        style={{
          alignSelf: "center",
          backgroundColor: hexToRGBA(color, 0.15),
          padding: 30,
          borderRadius: 500,
        }}
      />

      <Text>TagAddScreen</Text>
    </InputPageLayout>
  );
};

export default TagAddScreen;

const styles = StyleSheet.create({});
