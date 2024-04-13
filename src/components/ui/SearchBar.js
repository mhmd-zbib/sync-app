import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
import SearchIcon from "../../../assets/icons/SearchIcon.svg";

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
          paddingVertical: 13,
          paddingHorizontal: 17,
          display: "flex",
          flexDirection: "row",
        },
        containerStyle,
      ]}>
      {/* <Searc  hIcon width={120} height={120} /> */}
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
