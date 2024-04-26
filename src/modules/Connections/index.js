import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../shared/components/ui/Typography";
import Contacts from "./features/Contacts";

const ConnectionsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Contacts />
      {/* <Typography>I</Typography> */}
    </View>
  );
};

export default ConnectionsScreen;

const styles = StyleSheet.create({});
