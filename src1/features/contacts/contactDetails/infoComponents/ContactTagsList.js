import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileButton from "../../../../components/ui/buttons/ProfileButton";
import InfoCard from "../../../../components/ui/cards/InfoCard";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
const ContactTagsList = () => {
  const { tags } = useContactDetailsStore((state) => state.contactDetails);

  return (
    <InfoCard label="Tags">
      <View style={styles.tagContainer}>
        {tags
          ? tags.map((tag, index) => (
              <ProfileButton key={index} name={tag.name} />
            ))
          : null}
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
