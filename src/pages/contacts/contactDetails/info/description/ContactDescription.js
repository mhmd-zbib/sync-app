import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Typography from "../../../../../components/ui/text/Typography";
import InfoCard from "../../../../../components/ui/cards/InfoCard";
import { useContactDetailsStore } from "../../../../../stores/contacts/useContactDetailsStore";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../../../components/ui/buttons/Button";
import { useTheme } from "../../../../../stores/shared/themeStore";

const ContactDescription = () => {
  const { description } = useContactDetailsStore(
    (state) => state.contactDetails
  );
  const navigation = useNavigation();
  function navigateToEditDescription() {
    navigation.navigate("EditContactDescription");
  }
  const theme = useTheme();

  if (!description) {
    return (
      <InfoCard
        style={{ backgroundColor: "red" }}
        onPress={navigateToEditDescription}>
        <TouchableOpacity>
          {" "}
          <Typography>No description. Tap here to add</Typography>
        </TouchableOpacity>
      </InfoCard>
    );
  }

  return (
    <InfoCard
      label={"Description"}
      rightButton={
        <TouchableOpacity
          onPress={navigateToEditDescription}
          activeOpacity={0.9}
          style={{
            backgroundColor: theme.secondary,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 500,
          }}>
          <Typography color={theme.textSecondary} variant="sm">
            edit
          </Typography>
        </TouchableOpacity>
      }>
      <Typography>{description}</Typography>
    </InfoCard>
  );
};

export default ContactDescription;

const styles = StyleSheet.create({});
