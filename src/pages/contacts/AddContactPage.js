import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../components/ui/InputText";

const AddContactPage = () => {
  return (
    <View style={{ gap: 24 }}>
      <InputText placeholder="Name" />
      <InputText placeholder="Email" />
      <InputText placeholder="Phone Number" />
    </View>
  );
};

export default AddContactPage;

const styles = StyleSheet.create({});
