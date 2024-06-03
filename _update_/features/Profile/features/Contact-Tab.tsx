import Button from "@/components/Button";
import React from "react";
import { View } from "react-native";
import { ContactTabs } from "../types/enums";

interface ContactTabProps {
  tab: ContactTabs;
  setTab: (tab: ContactTabs) => void;
}

const ContactTab = ({ tab, setTab }: ContactTabProps) => {
  const buttonTitles: ContactTabs[] = [
    ContactTabs.Info,
    ContactTabs.Groups,
    ContactTabs.Notes,
    ContactTabs.Reminders,
  ];

  return (
    <View
      style={{ flexDirection: "row", gap: 10, justifyContent: "space-around" }}>
      {buttonTitles.map((title) => (
        <Button
          key={title}
          title={title}
          onPress={() => setTab(title)}
          variant={tab === title ? "primary" : "secondary"}
          rounded
        />
      ))}
    </View>
  );
};

export default ContactTab;
