import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../src/shared/components/ui/Typography";
import SearchBar from "../src/shared/components/ui/SearchBar";
import ConnectionOptionsTest from "./ConnectionOptions.test";

const ConnectionTopBarTest = () => {
  return (
    <View>
      <SearchBar placeHolder="Search" />
      <ConnectionOptionsTest />

      <Typography>ConnectionTopBarTest</Typography>
    </View>
  );
};

export default ConnectionTopBarTest;

const styles = StyleSheet.create({});
