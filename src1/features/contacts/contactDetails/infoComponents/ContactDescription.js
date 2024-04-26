import { useNavigation } from "@react-navigation/native";
import React from "react";
import EditButton from "../../../../components/ui/buttons/EditButton";
import InfoCard from "../../../../components/ui/cards/InfoCard";
import ProfileMissingInfo from "../../../../components/ui/cases/ProfileMissingInfo";
import Typography from "../../../../components/ui/text/Typography";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import { useTheme } from "../../../../stores/shared/themeStore";

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
