import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactInfoCont from "./ContactInfoCont";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import Typography from "../../../ui/text/Typography";
import { useTheme } from "../../../../stores/shared/themeStore";

const LabeledText = ({ label, content, contentColor }) => {
  const theme = useTheme();
  return (
    <View>
      <Typography color={theme.textAccent}>{label}</Typography>
      <Typography>{content}</Typography>
    </View>
  );
};

const ContactConnection = () => {
  const NA = "Not available";
  const { email, phone_number } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const emailContent = email || NA;
  const phoneContent = phone_number || NA;

  return (
    <ContactInfoCont style={{ gap: 24 }} label="Contact">
      <LabeledText label="Phone Number" content={phoneContent} />
      <LabeledText label="Email Address" content={emailContent} />
    </ContactInfoCont>
  );
};

export default ContactConnection;

const styles = StyleSheet.create({});
