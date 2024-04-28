import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import useGetContactProfile from "../../hooks/useGetContactProfile";

const ProfileHeader = () => {
  const { data } = useGetContactProfile();

  return (
    <View style={{ paddingHorizontal: 10, flexDirection: "row", gap: 16 }}>
      <ProfilePicture name={data.name} size="lg" />
      <View style={{ justifyContent: "space-around" }}>
        <Typography variant="xlg"> {data.name} </Typography>
        <Typography> add birthday </Typography>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
