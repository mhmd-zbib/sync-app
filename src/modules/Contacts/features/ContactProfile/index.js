import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import Typography from "../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import ContactProfileHeader from "./components/ContactProfileHeader";
import ContactProfileTabs from "./components/ContactProfileTabs";

const ContactProfileScreen = () => {
  const date = new Date();
  const timestamp = date.getTime();

  const data = {
    name: "Janno Carlitz",
    email: "XXXXXXXXXXXXXXXXX",
    phone: "0789456123",
    birthday: timestamp,
  };

  return (
    <DetailPage screenTitle={"Profile"} style={{ gap: 24 }}>
      <ContactProfileHeader data={data} />
      <ContactProfileTabs />
    </DetailPage>
  );
};

export default ContactProfileScreen;

const styles = StyleSheet.create({});
