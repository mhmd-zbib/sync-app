import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/themeStore";
import { Ionicons, Feather } from "@expo/vector-icons";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  placeHolder = "Search",
  containerStyle,
  children,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          borderWidth: 1,
          backgroundColor: theme.secondary,
          borderRadius: 500,
          paddingVertical: 12,
          paddingHorizontal: 22,
          alignItemsL: "center",

          justifyContent: "center",
          flexDirection: "row",
          gap: 14,
        },
        containerStyle,
      ]}>
      <Feather name="search" size={26} color={theme.primary} />

      <TextInput
        cursorColor={theme.textSecondary}
        placeholder={placeHolder}
        placeholderTextColor={theme.textAccent}
        style={{
          color: theme.textPrimary,
          fontSize: 16,
          flex: 1,
        }}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
