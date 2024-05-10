import React, { useState } from "react";
import { StyleSheet } from "react-native";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import Loading from "../../../../shared/components/layout/Loading";
import useGetContacts from "../ContactList/hooks/useGetContacts";
import ContactSelectList from "./components/ContactSelectList";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../../shared/components/ui/buttons/Button";

const ContactSelectListScreen = ({ route, navigation }) => {
  const { data: contacts, isLoading, isError, error } = useGetContacts();
  const [selected, setSelected] = useState(route.params.selectedContacts || []);

  if (isLoading) {
    return <Loading />;
  }

  const goBack = () => {
    route.params.onGoBack(selected);
    navigation.goBack();
  };

  console.log(selected);

  return (
    <InputPageLayout
      headerRight={
        <Button
          rounded
          size="sm"
          onPress={() => setSelected([])}
          title={"clear"}
          variant="accent"
        />
      }
      screenTitle={"Select Contacts"}
      buttonTitle={"Select"}
      onPress={goBack}>
      <ContactSelectList
        contacts={contacts}
        selected={selected}
        setSelected={setSelected}
      />
    </InputPageLayout>
  );
};

export default ContactSelectListScreen;

const styles = StyleSheet.create({});
