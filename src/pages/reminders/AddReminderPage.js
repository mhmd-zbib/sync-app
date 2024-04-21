import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import InputText from "../../components/ui/InputText";
import { useNavigation } from "@react-navigation/native";
import ReminderAddButton from "../../components/app/remindersList/ReminderAddButton";
import Button from "../../components/ui/buttons/Button";
import { useAddReminderMutation } from "../../queries/reminders/useAddReminderMutation";

const AddReminderPage = () => {
  const navigation = useNavigation();

  const { mutate: createReminder } = useAddReminderMutation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Reminder",
    });
  }, [navigation]);

  const reminder = {
    name: "TESTING TOOOO",
    description: "Testing this here",
    timestamp: 651651165,
  };

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
        label={"Task Description"}
        multiline
        placeholder="Task Description"
        style={{ marginTop: 24 }}
      />

      <Button
        title="Add"
        onPress={() => {
          createReminder(reminder);
        }}
      />
    </View>
  );
};

export default AddReminderPage;

const styles = StyleSheet.create({});
