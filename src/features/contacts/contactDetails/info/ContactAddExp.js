import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../../components/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";

const ContactAddExperience = () => {
  return (
    <InputPageLayout buttonTitle={"Save"}>
      <InputText label={"Job Title"} />
      <InputText label={"Position"} />
      <InputText label={"Company Name"} />
      <InputText label={"Website Link"} />
    </InputPageLayout>
  );
};

export default ContactAddExperience;

const styles = StyleSheet.create({});
