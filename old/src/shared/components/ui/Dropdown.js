import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../stores/themeStore";
import Label from "./Label";
import Typography from "./Typography";

const Dropdown = ({ options, onSelect, style, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOpen(true)}
        style={[styles.container, style]}>
        <Label label={label} />
        <View
          style={{
            backgroundColor: theme.secondary,
            paddingHorizontal: 10,
            justifyContent: "center",
            borderRadius: 5,
            flex: 1,
            width: "100%",
            borderWidth: 1,
            borderColor: theme.accent,
          }}>
          <Typography>
            {selectedOption ? selectedOption.name : "Select"}
          </Typography>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="none"
        onRequestClose={() => setIsOpen(false)}>
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.dropdown,
                  {
                    backgroundColor: theme.accent,
                    borderColor: theme.secondary,
                  },
                ]}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dropdownItem,
                      { borderColor: theme.secondary },
                    ]}
                    onPress={() => handleSelectOption(option)}>
                    <Typography>{option.name}</Typography>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  dropdown: {
    borderWidth: 1,
    zIndex: 1000,
    position: "absolute",
    top: 155,
    right: 40,
    borderRadius: 10,
  },
  dropdownItem: {
    padding: 10,
    paddingVertical: 15,
    borderBottomColor: "#DDD",
  },
});

export default Dropdown;
