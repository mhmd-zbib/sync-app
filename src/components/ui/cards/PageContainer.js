import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../buttons/Button";

const PageContainer = ({ children, onPress, buttonTitle }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", paddingBottom: 25 }}>
      {children}
      <Button
        style={{ marginHorizontal: 10 }}
        title={buttonTitle}
        onPress={onPress}
      />
    </View>
  );
};

export default PageContainer;

const styles = StyleSheet.create({});
