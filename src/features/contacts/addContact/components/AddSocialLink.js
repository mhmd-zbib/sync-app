import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputText from "../../../../components/ui/InputText";
import SocialLinkSelector from "./SocialLinkSelector";
import SelectPlatformModal from "./SelectPlatformModal";
import Dropdown from "../../../../components/ui/Dropdown";

const AddSocialLink = () => {
  const platforms = [
    { label: "LinkedIn", id: 1 },
    { label: "Instagram", id: 2 },
    { label: "Twitter", id: 3 },
    { label: "Facebook", id: 4 },
  ];

  return (
    <View style={styles.container}>
      <InputText label="Social Media Link" style={{ flex: 6 }} />
      <Dropdown
        label={"Platform"}
        options={platforms}
        onSelect={(item) => {
          console.log(item.id);
        }}
        style={{ flex: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",

    width: "100%",
    gap: 24,
  },
});

export default AddSocialLink;
