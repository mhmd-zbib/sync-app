import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactProfileHeader from "../../components/app/contactDetails/ContactProfileHeader";
import ContactOptionsTable from "../../components/app/contactDetails/ContactOptionsTable";

const DetailsContactPage = () => {
  return (
    <View style={{ marginTop: 32 }}>
      <ContactProfileHeader />
      <ContactOptionsTable />
    </View>
  );
};

export default DetailsContactPage;
