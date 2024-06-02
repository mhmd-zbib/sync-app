import { useTheme } from "@/hooks/useColorScheme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, TextInputProps, StyleProp } from "react-native";

interface SearchInputProps extends TextInputProps {
  additionalItem?: React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({
  additionalItem,
  style,
  ...props
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.secondary,
          borderRadius: 100,
          flexDirection: "row",
          paddingHorizontal: 18,
          paddingVertical: 12,
          alignItems: "center",
          gap: 10,
        },
        style,
      ]}>
      <Feather name="search" size={24} color={theme.textSecondary} />
      <TextInput
        {...props}
        cursorColor={theme.textAccent}
        placeholderTextColor={theme.textAccent}
        placeholder="Search"
        style={[{ flex: 1, color: theme.textPrimary, fontSize: 16 }]}
      />
      {additionalItem && additionalItem}
    </View>
  );
};

export default SearchInput;
