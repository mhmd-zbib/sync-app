import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import InputText from "../../ui/InputText";
import Button from "../../ui/buttons/Button";
import useContactFormStore from "../../../stores/contacts/useAddCotactStore";
import Typography from "../../ui/text/Typography";
import AddContactSocialCard from "./AddContactSocialCard";
const AddContactLinks = () => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  const { links, addLink } = useContactFormStore((state) => ({
    links: state.formData.links,
    addLink: state.addLink,
  }));
  const handleAddLink = () => {
    if (platform && link) {
      addLink({ platform, url: link });
      setPlatform("");
      setLink("");
    }
  };
  return (
    <View style={{ gap: 32 }}>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <InputText
          label="Social Media Platform"
          value={platform}
          onChangeText={setPlatform}
          style={{ flex: 2 }}
        />
        <InputText
          label="Social Media Link"
          value={link}
          onChangeText={setLink}
          style={{ flex: 1 }}
        />
      </View>
      <Button title="Add" onPress={handleAddLink} variant="neutral" />
      <ScrollView style={{}} contentContainerStyle={{ gap: 12 }}>
        {links.map((item, index) => (
          <AddContactSocialCard
            index={index}
            url={item.url}
            platform={item.platform}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddContactLinks;
