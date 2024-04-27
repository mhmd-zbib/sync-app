import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import Typography from "../../../../shared/components/ui/Typography";

const ProfileHeader = () => {
  const name = "Mohammad zbib";

  return (
    <View style={{ paddingHorizontal: 10, flexDirection: "row", gap: 16 }}>
      <ProfilePicture name={name} size="lg" />
      <View style={{ justifyContent: "space-around" }}>
        <Typography variant="xlg">{name}</Typography>
        <Typography> add birthday </Typography>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
