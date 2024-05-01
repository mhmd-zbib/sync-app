import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ModalScreen from "./cards/ModalScreen";
import Typography from "./Typography";
import { useTheme } from "../../stores/themeStore";

const OptionsModal = ({ toggleModal, modalVisible, options }) => {
  const theme = useTheme();

  return (
    <ModalScreen closeButton visible={modalVisible} onClose={toggleModal}>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <View key={index} style={styles.optionWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={option.onPress}
              style={styles.option}>
              <Typography color={option.color} variant="lg">
                {option.title}
              </Typography>
            </TouchableOpacity>
            {index !== options.length - 1 && (
              <View
                style={[styles.separator, { backgroundColor: theme.accent }]}
              />
            )}
          </View>
        ))}
      </View>
    </ModalScreen>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 10,
    width: "100%",
  },
  optionWrapper: {
    alignItems: "center",
    width: "100%",
  },
  option: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    width: "60%",
    alignSelf: "center",
  },
});

export default OptionsModal;
