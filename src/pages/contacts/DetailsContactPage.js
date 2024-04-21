import React from "react";
import { View } from "react-native";
import ContactOptionsTable from "../../components/app/contactDetails/ContactOptionsTable";
import ContactProfileHeader from "../../components/app/contactDetails/ContactProfileHeader";
import ContactSocialLinks from "../../components/app/contactDetails/ContactSocialLinks";
import Typography from "../../components/ui/text/Typography";
import useContactDetailsLayout from "../../hooks/contacts/useContactDetailsLayout";
import { useContactDetailsQuery } from "../../queries/contacts/useContactDetailsQuery";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";

const DetailsContactPage = ({ route }) => {
  const navigation = useContactDetailsLayout();
  const { userId } = route.params;

  const setContactDetails = useContactDetailsStore(
    (state) => state.setContactDetails
  );

  const {
    data: contactDetails,
    isSuccess,
    isLoading,
  } = useContactDetailsQuery(userId);

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
