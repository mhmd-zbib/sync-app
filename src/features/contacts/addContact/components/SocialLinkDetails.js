import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Dropdown from "../../../../components/ui/Dropdown";
import InputText from "../../../../components/ui/InputText";
import useSocialLinksStore from "../store/useContactSocialLinksStore";
import Button from "../../../../components/ui/buttons/Button";
import { useAddContactStore } from "../store/useAddContactStore";

const SocialLinkDetails = () => {
  const platforms = [
    { label: "LinkedIn", id: 1 },
    { label: "Instagram", id: 2 },
    { label: "Twitter", id: 3 },
    { label: "Facebook", id: 4 },
  ];

  const { formData } = useAddContactStore();

  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  return (
    <>
      <View style={styles.container}>
        <InputText
          label="Social Media Link"
          style={{ flex: 6 }}
          value={link}
          onChange={setLink}
        />
        <Dropdown
          label={"Platform"}
          options={platforms}
          onSelect={(item) => {
            setPlatform(item.id);
          }}
          style={{ flex: 5 }}
        />
      </View>
      <Button
        title={"Add"}
        size="sm"
        variant="accent"
        onPress={() => {
          formData.socialMediaLink.push({ link: link, platform: platform });
        }}
      />
    </>
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

export default SocialLinkDetails;
