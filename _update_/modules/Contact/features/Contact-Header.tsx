import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const NAME = "Mohammad";

const ContactHeader = () => {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        marginTop: 16,
      }}>
      <Avatar size={80} name={NAME} />
      <View style={{ justifyContent: "center" }}>
        <ThemedText size={20}>
          {NAME} {id}
        </ThemedText>
        <ThemedText variant="secondary" size={16}>
          Doctor
        </ThemedText>
      </View>
    </View>
  );
};

export default ContactHeader;
