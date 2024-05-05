import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/themeStore";

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
          borderColor: theme.accent,
          // backgroundColor: theme.secondary,
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 22,
          // display: "flex",
          flexDirection: "row",
        },
        containerStyle,
      ]}>
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
