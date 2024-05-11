import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import { useProfileQuery } from "../../queries/useProfileQuery";
import Loading from "../../../../shared/components/layout/Loading";
import Error from "../../../../shared/components/layout/Error";
import useProfileIdStore from "../../store/useProfileIdStore";

const ProfileScreen = ({ route }) => {
  const { isLoading, data } = useProfileQuery(route.params.id);
  const { setId } = useProfileIdStore();

  useEffect(() => {
    setId(route.params.id);
  }, [route]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) return <Error />;

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
