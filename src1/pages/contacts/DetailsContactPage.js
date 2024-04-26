import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Error from "../../components/layout/Error";
import Loading from "../../components/layout/Loading";
import ContactDetailsTable from "../../features/contacts/contactDetails/components/ContactDetailsTable";
import ContactHeader from "../../features/contacts/contactDetails/components/ContactHeader";
import useContactDetailsLayout from "../../features/contacts/contactDetails/hooks/useContactDetailsLayout";
import { fetchContactDetails } from "../../features/contacts/contactDetails/queries/fetchContactDetails";
import { useContactDetailsStore } from "../../stores/contacts/useContactDetailsStore";

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
  } = fetchContactDetails(userId);

  useEffect(() => {
    if (isSuccess) {
      setContactDetails(contactDetails);
    }
  }, [isSuccess, contactDetails, setContactDetails]);

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
