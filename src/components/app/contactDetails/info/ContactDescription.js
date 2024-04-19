import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Typography from "../../../ui/text/Typography";
import ContactInfoCont from "./ContactInfoCont";
import { useTheme } from "../../../../stores/shared/themeStore";
import Button from "../../../ui/buttons/Button";
import { useNavigation } from "@react-navigation/native";
import ContactEditDescription from "./ContactEditDescription";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";

const EditDescButton = ({ onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: theme.secondary,
        borderRadius: 400,
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      <Typography variant="sm" color={theme.textSecondary}>
        Edit
      </Typography>
    </TouchableOpacity>
  );
};

const ContactDescription = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const { description } = useContactDetailsStore(
    (state) => state.contactDetails
  );

  const theme = useTheme();
  return (
    <ContactInfoCont
      label={"Description"}
      rightLabel={description && <EditDescButton onPress={toggleModal} />}>
      {description ? (
        <Typography>{description}</Typography>
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
          <Typography color={theme.textAccent}>
            No description available.
          </Typography>
          <Typography> Click here</Typography>
          <Typography color={theme.textAccent}>to add description</Typography>
        </TouchableOpacity>
      )}
      <ContactEditDescription
        isVisible={modalVisible}
        onClose={toggleModal}
        description={description}
      />
    </ContactInfoCont>
  );
};

export default ContactDescription;

const styles = StyleSheet.create({});
