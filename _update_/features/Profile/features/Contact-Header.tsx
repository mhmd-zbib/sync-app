import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

const NAME = "Mohammad";

const ContactHeader = () => {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Avatar size={80} name={NAME} />
      <ThemedText size={20}>{NAME}</ThemedText>
    </View>
  );
};

export default ContactHeader;
