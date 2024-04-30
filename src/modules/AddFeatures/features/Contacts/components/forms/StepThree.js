import React from "react";
import { View } from "react-native";
import Dropdown from "../../../../../../shared/components/ui/Dropdown";
import InputText from "../../../../../../shared/components/ui/InputText";
import Button from "../../../../../../shared/components/ui/buttons/Button";
import SocialLinkItem from "../links/SocialLinkItem";
import useAddContactSocialLinks from "../../hooks/useAddContactSocialLinks";

const StepThree = () => {
  const { platforms, onSelect } = useAddContactSocialLinks();

  return (
    <View style={{ gap: 26 }}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <InputText style={{ flex: 1.5 }} label={"Link"} />

        <Dropdown
          options={platforms}
          label={"Select"}
          key={"name"}
          onSelect={onSelect}
        />
      </View>

      <Button title={"Add"} variant="accent" size={"sm"} />

      <SocialLinkItem />
    </View>
  );
};

export default StepThree;
