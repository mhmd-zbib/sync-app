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

  const navigateTo = (route, params) => {
    navigation.navigate(route, params);
  };

  return (
    <View style={{ gap: 8, marginVertical: 20 }}>
      <ProfileContainer
        label="Description"
        data={data.description}
        onPress={() =>
          navigateTo("EditDescriptionScreen", { description: data.description })
        }
      />
      <ProfileContainer
        label={"Contact"}
        data={ProfileContact(data)}
        onPress={() =>
          navigateTo("EditContactScreen", {
            phone: data.phone,
            email: data.email,
          })
        }
      />
      <ProfileContainer
        label="Tags"
        data={<ProfileTags tags={data.tags} />}
        onPress={() =>
          navigateTo("TagsListScreen", {
            selected: data.tags.map((item) => item.id),
          })
        }
      />
      <ProfileContainer
        label="Experience"
        data={<ProfileExperience data={data.experience} />}
      />
    </View>
  );
};

export default ProfileInfo;
