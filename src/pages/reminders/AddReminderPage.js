import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import InputText from "../../components/ui/InputText";
import PrimaryCard from "../../components/ui/cards/PrimaryCard";
import Typography from "../../components/ui/text/Typography";

const OptionsButton = ({ icon, title, value, onPress, modal }) => {
  return (
    <PrimaryCard onPress={onPress}>
      <Typography>{title}</Typography>
      {modal}
    </PrimaryCard>
  );
};

const AddReminderPage = () => {
  return (
    <View>
      <View style={{ gap: 8 }}>
        <OptionsButton title={"Connections"} />
        <OptionsButton title={"Date & Time"} />
        <OptionsButton title={"Priority"} />
      </View>
      <InputText
        maxLength={35}
        placeholder="Task Name"
        style={{ marginTop: 24 }}
      />
      <InputText
        multiline
        placeholder="Task Description"
        style={{ marginTop: 24 }}
      />
    </View>
  );
};

export default AddReminderPage;

const styles = StyleSheet.create({});
