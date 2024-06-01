import React from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";

interface TextInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter text:</Text>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
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
