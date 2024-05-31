import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
