import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OptionsModal from "../../../../../shared/components/ui/OptionsModal";
import { useDeleteContactMutation } from "../../../queries/useDeleteContactMutation";
import useProfileIdStore from "../../../store/useProfileIdStore";

const ProfileOptionsModal = ({ toggleModal, visible }) => {
  const { id } = useProfileIdStore();

  const { mutate } = useDeleteContactMutation(id);

  return (
    <OptionsModal
      modalVisible={visible}
      toggleModal={toggleModal}
      options={[
        { title: "Edit Profile" },
        // { title: "Change Password" },
        { title: "Delete", color: "red", onPress: mutate },
      ]}
    />
  );
};

export default ProfileOptionsModal;

const styles = StyleSheet.create({});
