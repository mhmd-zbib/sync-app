import ContactGroup from "@/features/Contact-Group/features/Contact-Group";
import ContactReminder from "@/features/Contact-Reminder/features/Contact-Reminder";
import NoteList from "@/features/Notes/features/Note-List";
import ContactHeader from "@/features/Profile/features/Contact-Header";
import ContactInfo from "@/features/Profile/features/Contact-Info";
import ContactLinks from "@/features/Profile/features/Contact-Links";
import ContactTab from "@/features/Profile/features/Contact-Tab";
import { ContactTabs } from "@/features/Profile/types/enums";
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

const ContactLayout = () => {
  const [tab, setTab] = useState<ContactTabs>(ContactTabs.Info);

  const tabComponents = useMemo(
    () => ({
      [ContactTabs.Info]: <ContactInfo />,
      [ContactTabs.Notes]: <NoteList />,
      [ContactTabs.Reminders]: <ContactReminder />,
      [ContactTabs.Groups]: <ContactGroup />,
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

export default ContactLayout;
