import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Error = ({ error, message = "Something went wrong" }) => {
  console.log(error);
  return (
    <View style={styles.center}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "red",
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 8,
          opacity: 0.5,
        }}>
        <Text style={{ color: "red" }}>{message} </Text>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
