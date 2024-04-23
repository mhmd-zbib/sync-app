import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../components/ui/text/Typography";
import useContactDetailsLayout from "../../hooks/contacts/useContactDetailsLayout";
import { useContactDetailsQuery } from "../../features/contacts/contactDetails/queries/useContactDetailsQuery";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";
import Loading from "../../components/layout/Loading";
import Error from "../../components/layout/Error";
import ContactHeader from "../../features/contacts/contactDetails/components/ContactHeader";
import ContactDetailsTable from "../../features/contacts/contactDetails/components/ContactDetailsTable";

const DetailsContactPage = ({ route }) => {
  const { userId } = route.params;
  const navigation = useContactDetailsLayout();
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
      <ContactHeader />
      <ContactDetailsTable />
    </View>
  );
};

export default DetailsContactPage;

const styles = StyleSheet.create({});
