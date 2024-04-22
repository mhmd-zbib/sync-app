import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PageContainer from "../../../../components/ui/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";

const ContactAddExperience = () => {
  return (
    <PageContainer buttonTitle={"Save"}>
      <InputText label={"Job Title"} />
      <InputText label={"Position"} />
      <InputText label={"Company Name"} />
      <InputText label={"Website Link"} />
    </PageContainer>
  );
};

export default ContactAddExperience;

const styles = StyleSheet.create({});
