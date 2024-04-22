import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../components/ui/text/Typography";
import useContactDetailsLayout from "../../hooks/contacts/useContactDetailsLayout";
import { useContactDetailsQuery } from "../../queries/contacts/useContactDetailsQuery";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";
import Loading from "../../components/ui/Loading";
import Error from "../../components/ui/Error";
import ContactHeader from "./contactDetails/ContactHeader";
import ContactDetailsTable from "./contactDetails/ContactDetailsTable";

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
