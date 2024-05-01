import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "../../../stores/themeStore";
import Button from "../buttons/Button";
const ModalScreen = ({ visible, onClose, children, closeButton = false }) => {
  const theme = useTheme();

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View
              style={[
                styles.modalContent,
                { backgroundColor: theme.secondary, gap: 15 },
              ]}>
              <>{children}</>
              {closeButton && (
                <Button
                  variant="secondary"
                  onPress={onClose}
                  title="Close"
                  style={{ width: "100%" }}
                  size="sm"
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 20,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
  },
});

export default ModalScreen;
