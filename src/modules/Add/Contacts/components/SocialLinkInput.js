import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Dropdown from "../../../../../src1/components/ui/Dropdown";
import InputText from "../../../../../src1/components/ui/InputText";
import Button from "../../../../../src1/components/ui/buttons/Button";
import useAddContact from "../hooks/usePlatformArray";
import useHandleSocialLink from "../hooks/useHandleSocialLink";

const SocialLinkInput = () => {
  const { platforms } = useAddContact();
  const { handleAddSocialLinks } = useHandleSocialLink();
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
        disabled={!platform || !link}
        title={"Add"}
        size="sm"
        variant="accent"
        onPress={() => {
          handleAddSocialLinks(link, platform);
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

export default SocialLinkInput;
