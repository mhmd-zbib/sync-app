// AddContactLinks.js
import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import InputText from "../../ui/InputText";
import Button from "../../ui/buttons/Button";
import PlatformSelector from "../../ui/Dropdown";
import AddContactSocialCard from "./AddContactSocialCard";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";
import { StyleSheet } from "react-native";
import Typography from "../../ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";

const AddContactLinks = () => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { links, addLink } = useContactFormStore((state) => ({
    links: state.formData.links,
    addLink: state.addLink,
  }));

  const handleAddLink = () => {
    if (platform && link) {
      addLink({ platform, url: link });
      console;
      setPlatform("");
      setLink("");
    }
  };

  const platforms = [
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Instagram", value: "Instagram" },
    { label: "Twitter", value: "Twitter" },
    { label: "Facebook", value: "Facebook" },
  ];

  return (
    <View style={{ gap: 24 }}>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <InputText
          label="Social Media Link"
          value={link}
          onChangeText={setLink}
          style={{ flex: 1 }}
        />
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: theme.accent,
          }}
          onPress={() => setModalVisible(true)}>
          <Typography color={theme.textSecondary}>Select Platform</Typography>

          <Typography>{platform || "Platform"}</Typography>
        </TouchableOpacity>
      </View>
      <Button title="Add" onPress={handleAddLink} variant="neutral" />
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        {links.map((item, index) => (
          <AddContactSocialCard
            key={index}
            url={item.url}
            platform={item.platform}
          />
        ))}
      </ScrollView>
      <PlatformSelector
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={setPlatform}
        options={platforms}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 18,
  },
  dropdownHeader: {
    padding: 10,
    backgroundColor: "#ddd",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default AddContactLinks;
