import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import InputText from "../../../../shared/components/ui/InputText";

const EditNoteScreen = ({ route }) => {
  return (
    <InputPageLayout title="Edit Note">
      <InputText />
    </InputPageLayout>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({});
