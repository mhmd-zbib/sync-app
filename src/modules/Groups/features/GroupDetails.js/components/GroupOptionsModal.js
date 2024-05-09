import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OptionsModal from "../../../../../shared/components/ui/OptionsModal";
import Typography from "../../../../../shared/components/ui/Typography";
import { useGroupDeleteMutation } from "../../../queries/useGroupDeleteMutation";
import useGroupIdStore from "../../../store/useGroupIdStore";
import useGroupContactSelectModeStore from "../../../store/useGroupContactSelectModeStore";

const GroupOptionsModal = ({ toggleModal, modalVisible }) => {
  const id = useGroupIdStore((state) => state.id);
  const { mutate } = useGroupDeleteMutation();
  const { selectMode: contactSelectMode } = useGroupContactSelectModeStore();

  const defaultOptions = [
    {
      title: "Edit Group",
      onPress: () => console.log("Edit pressed"),
    },

    {
      title: "Delete Group",
      onPress: () => mutate(id),
      color: "red",
    },
  ];

  const contactSelectOptions = [
    {
      title: "Remove Contacts",
      onPress: () => console.log("Edit pressed"),
    },
  ];

  return (
    <OptionsModal
      toggleModal={toggleModal}
      modalVisible={modalVisible}
      options={contactSelectMode ? contactSelectOptions : defaultOptions}
    />
  );
};

export default GroupOptionsModal;

const styles = StyleSheet.create({});
