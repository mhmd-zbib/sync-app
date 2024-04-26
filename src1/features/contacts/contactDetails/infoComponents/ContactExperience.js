import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InfoCard from "../../../../components/ui/cards/InfoCard";
import Typography from "../../../../components/ui/text/Typography";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";
import ProfileMissingInfo from "../../../../components/ui/cases/ProfileMissingInfo";
import { useNavigation } from "@react-navigation/native";

const ContactExperience = () => {
  const { experience } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const test = { job_title: "Software" };
  const navigation = useNavigation();
  const navigateToAddExperience = () => {
    navigation.navigate("ContactAddExperience");
  };

  const RenderExperience = () => {
    if (!experience)
      return (
        <ProfileMissingInfo
          message={"Tap here to add"}
          onPress={navigateToAddExperience}
        />
      );

    return (
      <View>
        <Typography>exp</Typography>
      </View>
    );
  };

  return (
    <InfoCard label={"Experience"}>
      <RenderExperience />
    </InfoCard>
  );
};

export default ContactExperience;

const styles = StyleSheet.create({});
