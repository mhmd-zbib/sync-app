import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../../stores/themeStore";
import Typography from "../ui/Typography";

const Error = ({ error, message = "Something went wrong" }) => {
  const theme = useTheme();

  console.log(error);
  return (
    <View style={styles.center}>
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 8,
          opacity: 0.5,
          alignItems: "center",
          width: "50%",
          gap: 8,
        }}>
        <Ionicons name="sad-sharp" size={72} color={theme.textAccent} />

        <View style={{ alignItems: "center" }}>
          <Typography variant="xlg" fontWeight={500}>
            OOPS!
          </Typography>
          <Typography style={{ textAlign: "center" }} color={theme.textAccent}>
            {message}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
