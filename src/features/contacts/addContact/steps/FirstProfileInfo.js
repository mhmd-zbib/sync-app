import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "../../../../components/ui/InputText";
import ReminderFrequency from "../components/ReminderFrequency";

const FirstProfileInfo = () => {
  return (
    <>
      <InputText label={"Name"} />
      <ReminderFrequency />
    </>
  );
};

export default FirstProfileInfo;

const styles = StyleSheet.create({});
