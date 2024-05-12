import React, { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import { useProfileQuery } from "../../queries/useProfileQuery";
import useProfileIdStore from "../../store/useProfileIdStore";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTabs from "./components/ProfileTabs";

const ProfileScreen = ({ route }) => {
  const { setId } = useProfileIdStore();
  const [id, setIdFromRoute] = useState(null);

  useLayoutEffect(() => {
    const routeId = route.params?.id;
    if (routeId) {
      console.log(routeId);
      setIdFromRoute(routeId);
      setId(routeId);
    }
  }, [route.params?.id, setId]);

  const { data, isLoading, error, isError } = useProfileQuery(id);
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return (
    <DetailPage
      screenTitle={"Profile"}
      style={{ paddingHorizontal: 10 }}
      loading={isLoading}
      error={error}>
      <ScrollView>
        <ProfileHeader />
        <ProfileTabs />
      </ScrollView>
    </DetailPage>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
