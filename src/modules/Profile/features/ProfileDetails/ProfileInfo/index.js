import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useProfileQuery } from "../../../queries/useProfileQuery";
import ProfileContact from "./components/ProfileContact";
import ProfileContainer from "./components/ProfileContainer";
import ProfileExperience from "./components/ProfileExperience";
import ProfileTags from "./components/ProfileTags";

const ProfileInfo = ({ id }) => {
  const { data } = useProfileQuery(id);
  const navigation = useNavigation();

  const navigateTo = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={{ gap: 8, marginVertical: 20 }}>
      <ProfileContainer
        label="Description"
        data={data.description}
        onPress={() => navigateTo("EditDescriptionScreen")}
      />
      <ProfileContainer label={"Contact"} data={ProfileContact(data)} />
      <ProfileContainer label="Tags" data={<ProfileTags tags={data.tags} />} />
      <ProfileContainer
        label="Experience"
        data={<ProfileExperience data={data.experience} />}
      />
    </View>
  );
};

export default ProfileInfo;
