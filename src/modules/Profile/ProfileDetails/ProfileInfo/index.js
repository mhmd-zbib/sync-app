import React from "react";
import { ScrollView, View } from "react-native";
import ProfileContact from "./components/ProfileContact";
import ProfileContainer from "./components/ProfileContainer";
import ProfileTags from "./components/ProfileTags";
import ProfileExperience from "./components/ProfileExperience";
import { useProfileQuery } from "../../queries/useProfileQuery";

const ProfileInfo = () => {
  const { data } = useProfileQuery();

  return (
    <View style={{ gap: 8, marginVertical: 20 }}>
      <ProfileContainer label="Description" data={data.description} />
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
