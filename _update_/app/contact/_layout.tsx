import ThemedText from "@/components/ThemedText";
import ContactHeader from "@/features/Profile/features/Contact-Header";
import ContactInfo from "@/features/Profile/features/Contact-Info";
import ContactTab from "@/features/Profile/features/Contact-Tab";
import { ContactTabs } from "@/features/Profile/types/enums";
import React, { useState, useMemo } from "react";
import { ScrollView } from "react-native";

const ContactLayout = () => {
  const [tab, setTab] = useState<ContactTabs>(ContactTabs.Info);

  const tabComponents = useMemo(
    () => ({
      [ContactTabs.Info]: <ContactInfo />,
      [ContactTabs.Notes]: <ThemedText>Notes</ThemedText>,
      [ContactTabs.Reminders]: <ThemedText>Reminders</ThemedText>,
    }),
    []
  );

  return (
    <ScrollView>
      <ContactHeader />
      <ContactTab tab={tab} setTab={setTab} />
      {tabComponents[tab]}
    </ScrollView>
  );
};

export default ContactLayout;
