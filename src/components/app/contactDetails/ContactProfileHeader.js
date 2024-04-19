import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfilePicture from "../../ui/cards/ProfilePicture";
import Typography from "../../ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";
import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";
import ContactSocialLinks from "./ContactSocialLinks";

const ButtonReminder = ({ title, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.secondary,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.accent,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Typography color={theme.textSecondary}>{title}</Typography>
    </TouchableOpacity>
  );
};

const ContactProfileHeader = () => {
  const { name } = useContactDetailsStore((state) => state.contactDetails);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        marginHorizontal: 10,
      }}>
      <ProfilePicture name={name} size="lg" />

      <View style={{ justifyContent: "space-around" }}>
        <Typography variant="xlg">{name}</Typography>

        {/* <View style={{ flexDirection: "row", gap: 6 }}>
          <ButtonReminder title={"Birthday"} />
          <ButtonReminder title={"Birthday"} />
        </View> */}
      </View>
    </View>
  );
};

export default ContactProfileHeader;

const styles = StyleSheet.create({});
