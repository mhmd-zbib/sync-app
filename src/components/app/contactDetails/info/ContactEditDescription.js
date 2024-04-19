import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomHeader from "../../../ui/PageHeader";
import { useTheme } from "../../../../stores/shared/themeStore";
import InputText from "../../../ui/InputText";
import Button from "../../../ui/buttons/Button";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import ContactsService from "../../../../services/ContactService";
import { useQueryClient } from "@tanstack/react-query";

const ContactEditDescription = ({ isVisible, onClose, description }) => {
  const theme = useTheme();
  const { id } = useContactDetailsStore((state) => state.contactDetails);
  const [desc, setDesc] = useState(description);
  const queryClient = useQueryClient();

  const submit = () => {
    console.log(id, desc);
    ContactsService.addContactDescription(id, desc);
    queryClient.refetchQueries(["contactDetails"]);
    onClose();
  };

  const close = () => {
    onClose();
    setDesc(description);
  };

  console.log(description);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={close}>
      <CustomHeader title={""} navigation={true} onBackPress={close} />
      <View
        style={{
          backgroundColor: theme.background,
          flex: 1,
          paddingHorizontal: 10,
          gap: 32,
        }}>
        <InputText
          multiline
          label={"Description"}
          value={desc}
          onChange={setDesc}
        />
        <Button title={"Save"} onPress={submit} />
      </View>
    </Modal>
  );
};

export default ContactEditDescription;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%", // Full width
    height: "100%", // Full height

    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
