import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputPageLayout from "../../../../components/layout/InputPageLayout";
import InputText from "../../../../components/ui/InputText";
import useContactEditConnection from "../hooks/useContactEditConnection";

const ContactEditConnections = () => {
  const { phoneNum, setPhoneNum, emailAdd, setEmailAdd, handleSubmit } =
    useContactEditConnection();

  return (
    <InputPageLayout buttonTitle={"Save"} onPress={handleSubmit}>
      <InputText
        keyboardType="numeric"
        label={"Phone number"}
        value={phoneNum}
        onChange={setPhoneNum}
      />
      <InputText
        keyboardType="email-address"
        label={"Email"}
        value={emailAdd}
        onChange={setEmailAdd}
      />
    </InputPageLayout>
  );
};

export default ContactEditConnections;

const styles = StyleSheet.create({});
