import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../ui/InputText";

const AddContactNote = () => {
  return (
    <>
      <InputText label={"Title"} />
      <InputText />
    </>
  );
};

export default AddContactNote;

const styles = StyleSheet.create({});
