import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GoBackButton from "./buttons/GoBackButton";
import Typography from "./text/Typography";
import { useTheme } from "../../stores/shared/themeStore";

const CustomHeader = ({ title, onBackPress, navigation }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flexDirection: "row",
        paddingVertical: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
      }}>
      <View style={styles.backButtonContainer}>
        {navigation ? <GoBackButton onPress={onBackPress} /> : null}
      </View>
      <Typography variant="xlg">{title}</Typography>
      <View style={{ width: navigation ? "auto" : 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButtonContainer: {
    position: "absolute",
    left: 15,
    height: "100%",
    justifyContent: "center",
  },
});

export default CustomHeader;
