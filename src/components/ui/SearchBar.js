import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
import SearchIcon from "../../../assets/icons/SearchIcon.svg";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  placeHolder = "Search",
  children,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.accent,
        borderRadius: 13,
        paddingVertical: 12,
        paddingHorizontal: 12,
        display: "flex",
        flexDirection: "row",
      }}>
      {/* <SearchIcon width={120} height={120} /> */}
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={theme.textSecondary}
        style={{
          color: theme.textPrimary,
          fontSize: 16,
          flex: 1,
        }}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {children}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
