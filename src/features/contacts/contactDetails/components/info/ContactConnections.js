import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import InfoCard from "../../../../../components/ui/cards/InfoCard";
import ProfileMissingInfo from "../../../../../components/ui/cases/ProfileMissingInfo";
import Typography from "../../../../../components/ui/text/Typography";
import { useContactDetailsStore } from "../../../../../stores/contacts/useContactDetailsStore";
import { useTheme } from "../../../../../stores/shared/themeStore";
import { useNavigation } from "@react-navigation/native";
import EditButton from "../../../../../components/ui/buttons/EditButton";

const RenderItem = memo(({ item, title, textColor }) => (
  <View style={styles.itemContainer}>
    <Typography color={textColor}>{title}</Typography>
    {item ? (
      <Typography>{item}</Typography>
    ) : (
      <Typography color={textColor}>No {title.toLowerCase()}</Typography>
    )}
  </View>
));

const ContactConnections = () => {
  const { phone_number, email } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const navigation = useNavigation();
  const theme = useTheme();

  const navigateToEdit = () => navigation.navigate("ContactEditConnections");

  const RenderContacts = () => {
    if (!phone_number && !email) {
      return (
        <ProfileMissingInfo
          onPress={navigateToEdit}
          message="Tap here to add"
        />
      );
    }

    return (
      <>
        <RenderItem
          title="Phone number"
          item={phone_number}
          textColor={theme.textSecondary}
        />
        <RenderItem
          title="Email"
          item={email}
          textColor={theme.textSecondary}
        />
      </>
    );
  };

  return (
    <InfoCard
      label="Contact"
      childStyle={styles.childStyle}
      rightButton={
        phone_number || email ? <EditButton onPress={navigateToEdit} /> : null
      }>
      {RenderContacts()}
    </InfoCard>
  );
};

export default ContactConnections;

const styles = StyleSheet.create({
  itemContainer: {
    gap: 6, // Check if gap works, replace with margin or padding if not
  },
  childStyle: {
    gap: 24, // Same as above
  },
});
