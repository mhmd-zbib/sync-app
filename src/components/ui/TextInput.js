import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
import { TextInput } from "react-native";

const InputText = ({
  value,
  onChange,
  placeholder = "Type here",
  style,
  ...props
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderColor: theme.accent,
          paddingBottom: 8,
        },
        style,
      ]}>
      <TextInput
        placeholderTextColor={theme.textSecondary}
        style={[{ color: theme.textPrimary, fontSize: 14 }]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
