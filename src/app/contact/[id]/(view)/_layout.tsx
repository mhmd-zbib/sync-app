import ErrorScreen from "@/components/layouts/ErrorScreen";
import Avatar from "@/components/ui/Avatar";
import Loading from "@/components/ui/Loading";
import NavTab from "@/components/ui/Nav-Tabs";
import ThemedText from "@/components/ui/ThemedText";
import ContactLinksItem from "@/modules/Contact/components/Contact-Link-Item";
import { useContact } from "@/modules/Contact/query/get-contact";
import { Slot, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

const ContactLayout = () => {
  const { contactId } = useLocalSearchParams();
  const navItems = [
    { path: `/contact/${contactId}`, title: "Info" },
    { path: `/contact/${contactId}/notes`, title: "Notes" },
    { path: `/contact/${contactId}/reminders`, title: "Reminders" },
    { path: `/contact/${contactId}/groups`, title: "Groups" },
  ];

  const { data, isLoading, isError } = useContact({ contactId: contactId });
  const { name, links } = data || {};

  if (isLoading) return <Loading />;
  if (!data || isError) return <ErrorScreen />;

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
          <Avatar size={80} name={name} />
          <View style={{ justifyContent: "center" }}>
            <ThemedText size={20}>{name}</ThemedText>
            {/* <ThemedText variant="secondary" size={16}>
              Doctor
            </ThemedText> */}
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {links?.map(({ platform, link }, index) => (
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
