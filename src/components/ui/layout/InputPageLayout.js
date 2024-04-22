import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../buttons/Button";

const InputPageLayout = ({ children, onPress, buttonTitle }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", paddingBottom: 25 }}>
      <View style={{ gap: 32, paddingHorizontal: 10 }}>{children}</View>
      <Button
        style={{ marginHorizontal: 10 }}
        title={buttonTitle}
        onPress={onPress}
      />
    </View>
  );
};

export default InputPageLayout;

const styles = StyleSheet.create({});
