import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";
import InfoContainer from "../components/Info-Container";
import Separator from "@/components/Separator";

const ContactInfo = () => {
  return (
    <View style={{ gap: 8 }}>
      <InfoContainer title="Description">
        <ThemedText>hello</ThemedText>
      </InfoContainer>

      <InfoContainer title="Contact">
        <ThemedText> Phone Number</ThemedText>
        <Separator />
        <ThemedText> Email Address</ThemedText>
      </InfoContainer>
    </View>
  );
};

export default ContactInfo;
