import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ModalScreen from "./cards/ModalScreen";
import Typography from "./Typography";
import { useTheme } from "../../stores/themeStore";

/**
 * OptionsModal Component
 * A reusable modal component for displaying a list of clickable options.
 * Each option can perform an action when pressed.
 *
 * Props:
 * - toggleModal (Function): Function to toggle the modal's visibility.
 * - modalVisible (Boolean): State indicating whether the modal is visible.
 * - options (Array): Array of objects defining the options. Each object should have:
 *    - title (String): Display text for the option.
 *    - onPress (Function): Function to call when the option is pressed.
 *    - color (String, optional): Color of the option text.
 *
 * Example Usage:
 * <OptionsModal
 *   toggleModal={handleToggle}
 *   modalVisible={isVisible}
 *   options={[{ title: "Option 1", onPress: handleOption1, color: "#333" }]}
 * />
 */

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
