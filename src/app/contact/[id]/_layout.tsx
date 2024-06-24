import Avatar from "@/components/Avatar";
import NavTab from "@/components/Nav-Tabs";
import ThemedText from "@/components/ThemedText";
import ContactLinksItem from "@/modules/Contact/components/Contact-Link-Item";
import { Slot, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const links = [
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
    <ScrollView
      bounces={false}
      overScrollMode="never"
      stickyHeaderHiddenOnScroll>
      <View style={{ gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginTop: 16,
          }}>
          <Avatar size={80} name={"Test Person"} />
          <View style={{ justifyContent: "center" }}>
            <ThemedText size={20}>Test Person {id}</ThemedText>
            <ThemedText variant="secondary" size={16}>
              Doctor
            </ThemedText>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {links.map(({ platform, link }, index) => (
            <ContactLinksItem key={index} iconName={platform} link={link} />
          ))}
        </View>
        <NavTab navItems={navItems} />
        <Slot />
      </View>
    </ScrollView>
  );
};

export default ContactLayout;
