import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import InputText from "../../components/ui/InputText";
import { useNavigation } from "@react-navigation/native";
import ReminderAddButton from "../../components/app/reminders/ReminderAddButton";

const AddReminderPage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Reminder",
    });
  }, [navigation]);

  return (
    <View>
      <View style={{ gap: 8 }}>
        <ReminderAddButton title={"Connections"} />
        <ReminderAddButton title={"Date & Time"} />
        <ReminderAddButton title={"Priority"} />
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
