import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../components/ui/text/Typography";
import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";
import ProfilePicture from "../../../components/ui/cards/ProfilePicture";

const BirthdayItem = () => {
  return (
    <View>
      <Typography variant="sm">Birthday</Typography>
    </View>
  );
};

const ContactHeader = () => {
  const { name } = useContactDetailsStore((state) => state.contactDetails);

  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 16,
        paddingHorizontal: 10,
      }}>
      <ProfilePicture name={name} size="lg" />
      <View style={{ justifyContent: "space-around" }}>
        <Typography variant="xlg">{name}</Typography>
        <BirthdayItem />
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({});
