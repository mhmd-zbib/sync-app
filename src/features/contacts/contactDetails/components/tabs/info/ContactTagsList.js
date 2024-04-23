import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileButton from "../../../../../../components/ui/buttons/ProfileButton";
import InfoCard from "../../../../../../components/ui/cards/InfoCard";
import useContactTagsList from "../../../../../../hooks/contacts/useContactTagsList";
const ContactTagsList = () => {
  const { tags, remaining } = useContactTagsList();

  return (
    <InfoCard label="Tags">
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <ProfileButton key={index} name={tag.name} />
        ))}
        <ProfileButton name="+ Add new tag" isButton />
      </View>
    </InfoCard>
  );
};

export default ContactTagsList;

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
