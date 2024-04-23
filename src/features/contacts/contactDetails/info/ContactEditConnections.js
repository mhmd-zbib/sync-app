import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../../components/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";

const ContactEditConnections = () => {
  return (
    <InputPageLayout buttonTitle={"Save"}>
      <InputText keyboardType="phone-pad" label={"Phone number"} />
      <InputText keyboardType="email-address" label={"Email"} />
    </InputPageLayout>
  );
};

export default ContactEditConnections;

const styles = StyleSheet.create({});
