import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactInfoCont from "../../../../../components/app/contactDetails/info/ContactInfoCont";
import InfoCard from "../../../../../components/ui/cards/InfoCard";
import useContactTagsList from "../../../../../hooks/contacts/useContactTagsList";
import Typography from "../../../../../components/ui/text/Typography";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useTheme } from "../../../../../stores/shared/themeStore";

const ContactTagsList = () => {
  const { tags, remaining } = useContactTagsList();

  const theme = useTheme();

  const RenderTagItem = ({ name, onPress, isButton = false }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: isButton ? theme.primary : theme.secondary,
          borderWidth: 1,
          borderColor: theme.accent,
          paddingVertical: 3,
          paddingHorizontal: 8,
          borderRadius: 6,
        }}>
        <Typography color={isButton && theme.background}>{name}</Typography>
      </TouchableOpacity>
    );
  };

  return (
    <InfoCard label={"Tags"}>
      <FlatList
        contentContainerStyle={{
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
        }}
        data={tags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <RenderTagItem name={item.name} />}
        ListFooterComponent={<RenderTagItem name={"+ Add new tag"} isButton />}
      />
    </InfoCard>
  );
};

export default ContactTagsList;

const styles = StyleSheet.create({});
