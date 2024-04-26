import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../../../components/ui/InputText";
import { useAddContactStore } from "../store/useAddContactStore";

const SecondContactInfo = () => {
  const { formData, updateField } = useAddContactStore();

  return (
    <>
      <InputText
        value={formData.phoneNumber}
        onChange={(text) => {
          updateField("phoneNumber", text);
        }}
        keyboardType={"numeric"}
        label={"Phone Number"}
      />
      <InputText
        value={formData.email}
        onChange={(text) => {
          updateField("email", text);
        }}
        keyboardType={"email-address"}
        label={"Email Address"}
      />
    </>
  );
};

export default SecondContactInfo;

const styles = StyleSheet.create({});
