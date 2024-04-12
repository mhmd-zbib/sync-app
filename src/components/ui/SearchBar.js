import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <View>
      <TextInput value={searchTerm} onChangeText={setSearchTerm} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
