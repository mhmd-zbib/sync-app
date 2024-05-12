import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import { useProfileQuery } from "../../queries/useProfileQuery";
import Loading from "../../../../shared/components/layout/Loading";
import Error from "../../../../shared/components/layout/Error";
import useProfileIdStore from "../../store/useProfileIdStore";

const ProfileScreen = ({ route }) => {
  const { setId, id } = useProfileIdStore();

  useLayoutEffect(() => {
    console.log(route.params.id);
    setId(route.params.id);
  }, [route.params.id, setId]);

  const { isLoading, error, isError } = useProfileQuery(id);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <DetailPage screenTitle={"Profile"} style={{ paddingHorizontal: 10 }}>
      <ScrollView>
        <ProfileHeader />
        <ProfileTabs />
      </ScrollView>
    </DetailPage>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
