import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import DetailPage from "../../../shared/components/layout/DetailPage";
import { useProfileQuery } from "../queries/useProfileQuery";
import Loading from "../../../shared/components/layout/Loading";

const ProfileScreen = () => {
  const { isLoading } = useProfileQuery();

  return (
    <DetailPage screenTitle={"Profile"} style={{ paddingHorizontal: 10 }}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <ProfileHeader />
          <ProfileTabs />
        </ScrollView>
      )}
    </DetailPage>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
