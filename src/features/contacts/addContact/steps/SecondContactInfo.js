import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../../../components/ui/InputText";

const SecondContactInfo = () => {
  return (
    <>
      <InputText label={"Phone Number"} />
      <InputText label={"Email Address"} />
    </>
  );
};

export default SecondContactInfo;

const styles = StyleSheet.create({});
