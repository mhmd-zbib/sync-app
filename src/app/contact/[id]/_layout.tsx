import NavTab from "@/components/Nav-Tabs";
import ContactHeader from "@/modules/Contact/components/Contact-Header";
import ContactLinksList from "@/modules/Contact/components/Contact-Link/Contact-Links-List";
import { Slot, useLocalSearchParams } from "expo-router";
import React from "react";
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
  const { id } = useLocalSearchParams();

  const navItems = [
    { path: `/contact/${id}`, title: "Info" },
    { path: `/contact/${id}/notes`, title: "Notes" },
    { path: `/contact/${id}/reminders`, title: "Reminders" },
    { path: `/contact/${id}/groups`, title: "Groups" },
  ];

  return (
    <ScrollView bounces={false} overScrollMode="never">
      <View style={{ paddingHorizontal: 10, gap: 16 }}>
        <ContactHeader />
        <ContactLinksList links={fakeData} />
        <NavTab navItems={navItems} />
        {/*  */}
        <Slot />
        {/*  */}
      </View>
    </ScrollView>
  );
};

export default ContactLayout;
