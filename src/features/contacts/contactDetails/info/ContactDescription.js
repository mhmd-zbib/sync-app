import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../../../../components/ui/text/Typography";
import InfoCard from "../../../../components/ui/cards/InfoCard";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../stores/shared/themeStore";
import ProfileMissingInfo from "../../../../components/ui/cases/ProfileMissingInfo";
import EditButton from "../../../../components/ui/buttons/EditButton";

const ContactDescription = () => {
  const { description } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const navigation = useNavigation();
  const theme = useTheme();

  const navigateToEditDescription = () => {
    navigation.navigate("EditContactDescription");
  };

  const renderDescription = () => {
    if (!description) {
      return (
        <ProfileMissingInfo
          onPress={navigateToEditDescription}
          message={"Tap here to add"}
        />
      );
    }
    return <Typography>{description}</Typography>;
  };

  return (
    <InfoCard
      label="Description"
      rightButton={
        description && <EditButton onPress={navigateToEditDescription} />
      }
      onPress={navigateToEditDescription}>
      {renderDescription()}
    </InfoCard>
  );
};

export default ContactDescription;
