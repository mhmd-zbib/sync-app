import { View, Text } from "react-native";
import React from "react";
import ProfileInfo from "../ProfileInfo";
import useProfileIdStore from "../../../store/useProfileIdStore";

const ProfileTabs = () => {
  const id = useProfileIdStore((state) => state.id);

  return (
    <>
      <ProfileInfo id={id} />
    </>
  );
};

export default ProfileTabs;
