import ThemedText from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";
import InfoContainer from "../components/Info-Container";
import Separator from "@/components/Separator";
import ContactContainer from "../components/Contact-Container";

const ContactInfo = () => {
  return (
    <View style={{ gap: 8 }}>
      <InfoContainer title="Description">
        <ThemedText>hello</ThemedText>
      </InfoContainer>

      <InfoContainer title="Contact">
        <ContactContainer title="Phone Number" data="afaga" />
        <Separator />
        <ContactContainer title="Email Address" data="rosberg@gmail.com" />
      </InfoContainer>
    </View>
  );
};

export default ContactInfo;
