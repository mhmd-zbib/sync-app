import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../stores/shared/themeStore";
import Typography from "./text/Typography";

const PlatformSelector = ({ visible, onClose, onSelect, options }) => {
  const theme = useTheme();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPressOut={onClose}>
        <View
          style={[styles.modalContainer, { backgroundColor: theme.secondary }]}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={{ gap: 10 }}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionItem,
                    { borderColor: theme.accent, borderBottomWidth: 1 },
                  ]}
                  onPress={() => {
                    onSelect(option.value);
                    onClose();
                  }}>
                  <Typography variant="lg">{option.label}</Typography>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  modalContent: {
    padding: 20,
  },
  optionItem: {
    padding: 10,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default PlatformSelector;
