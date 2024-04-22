import React from "react";
import { View } from "react-native";
import ContactOptionsTable from "../../components/app/contactDetails/ContactOptionsTable";
import ContactProfileHeader from "../../components/app/contactDetails/ContactProfileHeader";
import ContactSocialLinks from "../../components/app/contactDetails/ContactSocialLinks";
import Typography from "../../components/ui/text/Typography";
import useContactDetailsLayout from "../../hooks/contacts/useContactDetailsLayout";
import { useContactDetailsQuery } from "../../queries/contacts/useContactDetailsQuery";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";
import Loading from "../../components/ui/Loading";
import Error from "../../components/ui/Error";

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
    isError,
    error,
  } = useContactDetailsQuery(userId);

  if (isSuccess) setContactDetails(contactDetails);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <View style={{ flex: 1 }}>
      <ContactProfileHeader />
      <ContactSocialLinks />
      <ContactOptionsTable />
    </View>
  );
};

export default DetailsContactPage;
