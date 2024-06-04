import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

const NAME = "Mohammad";

const ContactHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        marginTop: 16,
      }}>
      <Avatar size={80} name={NAME} />
      <View style={{ justifyContent: "center" }}>
        <ThemedText size={20}>{NAME}</ThemedText>
        <ThemedText variant="secondary" size={16}>
          Doctor
        </ThemedText>
      </View>
    </View>
  );
};

export default ContactHeader;
