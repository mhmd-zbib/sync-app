import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Typography from "../../../../components/ui/text/Typography";
import ModalScreen from "../../../../components/ui/cards/ModalScreen";
import { platformColor } from "nativewind";

const SelectPlatformModal = ({ isModalVisible, toggleModal }) => {
  const platforms = [
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Twitter",
    "Telegram",
  ];

  const RenderPlatformItem = ({ item, onPress }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.platformItem}>
        <Typography variant="lg">{item}</Typography>
      </TouchableOpacity>
    );
  };

  return (
    <ModalScreen visible={isModalVisible} onClose={toggleModal}>
      {platforms.map((item) => {
        return <RenderPlatformItem item={item} />;
      })}
    </ModalScreen>
  );
};

export default SelectPlatformModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  platformItem: {
    paddingVertical: 10,
  },
});
