import { View, Text } from "react-native";
import React from "react";
import { useContactReminders } from "@/features/Contact/query/get-contact-reminders";
import { useLocalSearchParams } from "expo-router";

const ContactRemindersScreen = () => {
  const { contactId } = useLocalSearchParams();
  const { data } = useContactReminders({ contactId: contactId });

  return (
    <View>
      <Text>ContactRemindersScreen</Text>
    </View>
  );
};

export default ContactRemindersScreen;
