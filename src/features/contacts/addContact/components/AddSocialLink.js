import React from "react";
import { View, StyleSheet } from "react-native";
import InputText from "../../../../components/ui/InputText";
import SocialLinkSelector from "./SocialLinkSelector";

const AddSocialLink = () => {
  return (
    <View style={styles.container}>
      <InputText label="Social Media Link" style={{ flex: 6 }} />
      <SocialLinkSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    gap: 24,
  },
});

export default AddSocialLink;
