import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import ContactProfileHeader from "../../components/app/contactDetails/ContactProfileHeader";
import ContactOptionsTable from "../../components/app/contactDetails/ContactOptionsTable";
import ContactsService from "../../services/ContactService";
import { useQuery } from "@tanstack/react-query";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";
import Typography from "../../components/ui/text/Typography";
import ContactSocialLinks from "../../components/app/contactDetails/ContactSocialLinks";
import { useNavigation } from "@react-navigation/native";

const DetailsContactPage = ({ route }) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profile",

      headerRight: () => (
        <TouchableOpacity activeOpacity={0.8}>
          <Typography>Dropdown</Typography>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const { userId } = route.params;
  const setContactDetails = useContactDetailsStore(
    (state) => state.setContactDetails
  );

  const {
    data: contactDetails,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["contactDetails"],
    queryFn: () => ContactsService.getContactDetails(userId),
  });

  if (isSuccess) {
    setContactDetails(contactDetails);
    console.log("done");
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ContactProfileHeader />
      <ContactSocialLinks />
      <ContactOptionsTable />
    </View>
  );
};

export default DetailsContactPage;
