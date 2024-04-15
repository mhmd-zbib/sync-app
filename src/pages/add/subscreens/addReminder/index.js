import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import TextInput from "../../../../components/ui/TextInput";
import PrimaryCard from "../../../../components/cards/PrimaryCard";
import Typography from "../../../../components/Text.js/Typography";

const OptionsButton = ({ icon, title, value, onPress, modal }) => {
  return (
    <PrimaryCard onPress={onPress}>
      <Typography>{title}</Typography>
      {modal}
    </PrimaryCard>
  );
};

const AddReminder = () => {
  return (
    <View>
      <View style={{ gap: 8 }}>
        <OptionsButton title={"Connections"} />
        <OptionsButton title={"Date & Time"} />
        <OptionsButton title={"Priority"} />
      </View>
      <TextInput style={{ marginTop: 24 }} />
      <TextInput style={{ marginTop: 24 }} />
    </View>
  );
};

export default AddReminder;

const styles = StyleSheet.create({});
