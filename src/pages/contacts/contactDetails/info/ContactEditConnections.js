import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageContainer from "../../../../components/ui/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";

const ContactEditConnections = () => {
  return (
    <PageContainer buttonTitle={"Save"}>
      <InputText keyboardType="phone-pad" label={"Phone number"} />
      <InputText keyboardType="email-address" label={"Email"} />
    </PageContainer>
  );
};

export default ContactEditConnections;

const styles = StyleSheet.create({});
