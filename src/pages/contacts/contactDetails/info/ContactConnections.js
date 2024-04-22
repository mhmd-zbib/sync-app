import React from "react";
import { StyleSheet, View } from "react-native";
import InfoCard from "../../../../components/ui/cards/InfoCard";
import ProfileMissingInfo from "../../../../components/ui/cases/ProfileMissingInfo";
import Typography from "../../../../components/ui/text/Typography";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import { useTheme } from "../../../../stores/shared/themeStore";
import { useNavigation } from "@react-navigation/native";
import EditButton from "../../../../components/ui/buttons/EditButton";

const ContactConnections = () => {
  const { phone_number, email } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const navigation = useNavigation();

  const theme = useTheme();

  const RenderItem = ({ item, title }) => {
    return (
      <View style={{ gap: 6 }}>
        <Typography color={theme.textSecondary}>{title}</Typography>
        {item ? (
          <Typography>{item}</Typography>
        ) : (
          <Typography color={theme.accent}>No {title.toLowerCase()}</Typography>
        )}
      </View>
    );
  };

  const RenderContacts = () => {
    if (!phone_number && !email) {
      return (
        <ProfileMissingInfo
          onPress={navigateToEdit}
          message={"Tap here to add"}
        />
      );
    }

    return (
      <>
        <RenderItem title={"Phone number"} item={phone_number} />
        <RenderItem title={"Email"} item={email} />
      </>
    );
  };

  function navigateToEdit() {
    navigation.navigate("ContactEditConnections");
  }
  return (
    <InfoCard
      label={"Contact"}
      childStyle={{ gap: 24 }}
      rightButton={
        phone_number || (email && <EditButton onPress={navigateToEdit} />)
      }>
      {RenderContacts()}
    </InfoCard>
  );
};

export default ContactConnections;

const styles = StyleSheet.create({});
