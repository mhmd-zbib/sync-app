import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import Label from "./Label";

interface TextInputType extends TextInputProps {
  label?: string;
}

const TextInput: React.FC<TextInputType> = ({ label, ...props }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {label && <Label title={label} />}
      <RNTextInput
        style={{
          borderColor: theme.accent,
          borderBottomWidth: 1,
          paddingVertical: 10,
          color: theme.textPrimary,
          fontSize: 16,
        }}
        placeholder="Type here"
        placeholderTextColor={theme.textAccent}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default TextInput;
