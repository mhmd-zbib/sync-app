import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "../../stores/themeStore";
import Label from "./Label";

const InputText = ({
  value,
  onChange,
  label,
  placeholder = "Type here...",
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, style]}>
      <Label label={label} />
      <TextInput
        placeholderTextColor={theme.textAccent}
        style={[
          styles.input,
          {
            color: theme.textPrimary,
            borderColor: isFocused ? theme.primary : theme.accent,
          },
        ]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
});

export default InputText;
