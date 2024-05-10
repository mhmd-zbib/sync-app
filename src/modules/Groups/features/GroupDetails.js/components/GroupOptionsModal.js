import React from "react";
import { StyleSheet } from "react-native";
import OptionsModal from "../../../../../shared/components/ui/OptionsModal";
import { useGroupDeleteMutation } from "../../../queries/useGroupDeleteMutation";
import useGroupIdStore from "../../../store/useGroupIdStore";
import { useNavigation } from "@react-navigation/native";
import { useGroupAddContactMutation } from "../../../queries/useGroupAddContactMutation";
import { useGroupContactsQuery } from "../../../queries/useGroupContactsQuery";

const GroupOptionsModal = ({ toggleModal, modalVisible }) => {
  const id = useGroupIdStore((state) => state.id);
  const { mutate: deleteGroup } = useGroupDeleteMutation();
  const navigation = useNavigation();
  const { mutate: addContacts } = useGroupAddContactMutation();
  const { data: selectedContacts } = useGroupContactsQuery(id);

  const defaultOptions = [
    {
      title: "Edit Group",
      onPress: () => console.log("Edit pressed"),
    },
    {
      title: "Add Contacts",
      onPress: () => {
        toggleModal();
        navigation.navigate("ContactSelectListScreen", {
          selectedContacts: selectedContacts.map((item) => item.id),
          onGoBack: (contactsId) => {
            console.log(contactsId);
            const date = new Date();
            const timestamp = date.getTime();
            addContacts({ id, contactsId, timestamp });
          },
        });
      },
    },

    {
      title: "Delete Group",
      onPress: () => deleteGroup(id),
      color: "red",
    },
  ];

  return (
    <OptionsModal
      toggleModal={toggleModal}
      modalVisible={modalVisible}
      options={defaultOptions}
    />
  );
};

export default GroupOptionsModal;

const styles = StyleSheet.create({});
