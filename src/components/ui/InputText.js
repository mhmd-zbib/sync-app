import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useTheme } from "../../stores/shared/themeStore";
import Typography from "./text/Typography";

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
      <Typography style={{ color: theme.textSecondary }}>{label}</Typography>
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
