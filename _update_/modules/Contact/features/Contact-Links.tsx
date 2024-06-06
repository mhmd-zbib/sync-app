import React from "react";
import { View } from "react-native";
import ContactLinks from "../components/Contact-Link.tsx/Contact-Link-Item";

interface Link {
  platform: string;
  link: string;
}

interface LinksType {
  links: Link[];
}

const ContactLinksList: React.FC<LinksType> = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {links.map(({ platform, link }, index) => (
        <ContactLinks key={index} iconName={platform} link={link} />
      ))}
    </View>
  );
};

export default ContactLinksList;
