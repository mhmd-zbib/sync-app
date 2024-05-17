import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useProfileQuery } from "../../../queries/useProfileQuery";
import ProfileContact from "./components/ProfileContact";
import ProfileContainer from "./components/ProfileContainer";
import ProfileExperience from "./components/ProfileExperience";
import ProfileTags from "./components/ProfileTags";
import useProfileIdStore from "../../../store/useProfileIdStore";

const ProfileInfo = () => {
  const id = useProfileIdStore((state) => state.id);
  const { data } = useProfileQuery(id);
  const navigation = useNavigation();

  const navigateTo = (route, params) => {
    navigation.navigate(route, params);
  };

  return (
    <ScrollView>
      <View style={{ gap: 8 }}>
        <ProfileContainer
          label="Description"
          data={data.description}
          onPress={() =>
            navigateTo("EditDescriptionScreen", {
              description: data.description,
            })
          }
        />
        <ProfileContainer
          label={"Contact"}
          data={
            data.phone_number || data.email ? (
              <ProfileContact phone={data.phone_number} email={data.email} />
            ) : null
          }
          onPress={() =>
            navigateTo("EditContactScreen", {
              phone: data.phone_number,
              email: data.email,
            })
          }
        />
        <ProfileContainer
          label="Tags"
          data={data.tags.length > 0 && <ProfileTags tags={data.tags} />}
          onPress={() =>
            navigateTo("TagsListScreen", {
              selected: data.tags && data.tags.map((item) => item.id),
            })
          }
        />

        <ProfileContainer
          label="Experience"
          data={
            data.experience.length !== 0 && (
              <ProfileExperience data={data.experience} />
            )
          }
          onPress={() =>
            navigateTo("ExperienceListScreen", { experience: data.experience })
          }
        />
      </View>
    </ScrollView>
  );
};

export default ProfileInfo;
