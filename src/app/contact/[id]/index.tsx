import ContactHeader from "@/modules/Contact/features/Contact-Header";
import ContactInfo from "@/modules/Contact/features/Contact-Info";
import ContactLinks from "@/modules/Contact/components/Contact-Link/Contact-Links-List";
import ContactTab from "@/modules/Contact/features/Contact-Tab";
import { ContactTabs } from "@/modules/Contact/types/enums";
import ContactGroups from "@/modules/Group/features/Contact-Group";
// import ContactGroup from "@/modules/Group/features/Contact-Group";
import Notes from "@/modules/Notes/features/Notes";
import ContactReminder from "@/modules/Reminders/features/Contact-Reminders";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

const fakeData = [
  { platform: "facebook", link: "https://www.facebook.com/example" },
  { platform: "linkedin", link: "https://www.linkedin.com/in/example" },
  { platform: "github", link: "https://github.com/example" },
  { platform: "twitter", link: "https://twitter.com/example" },
  { platform: "instagram", link: "https://www.instagram.com/example" },
  { platform: "youtube", link: "https://www.youtube.com/example" },
  { platform: "pinterest", link: "https://www.pinterest.com/example" },
  { platform: "reddit", link: "https://www.reddit.com/user/example" },
  { platform: "tumblr", link: "https://example.tumblr.com/" },
];

const ContactScreen = () => {
  const [tab, setTab] = useState<ContactTabs>(ContactTabs.Info);
  const { id } = useLocalSearchParams();
  const tabComponents = useMemo(
    () => ({
      [ContactTabs.Info]: <ContactInfo />,
      [ContactTabs.Notes]: <Notes />,
      [ContactTabs.Reminders]: <ContactReminder />,
      [ContactTabs.Groups]: <ContactGroups />,
    }),
    []
  );

  return (
    <ScrollView bounces={false} overScrollMode="never">
      <View style={{ paddingHorizontal: 10, gap: 16 }}>
        <ContactHeader />
        <ContactLinks links={fakeData} />
        <ContactTab tab={tab} setTab={setTab} />
        {tabComponents[tab]}
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
