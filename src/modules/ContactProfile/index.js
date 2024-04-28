import React, { useEffect } from "react";
import Loading from "../../shared/components/layout/Loading";
import Typography from "../../shared/components/ui/Typography";
import ProfileHeader from "./features/Header";
import TabViewExample from "./features/TabView";
import useGetContactProfile from "./hooks/useGetContactProfile";
import useContactIdStore from "./stores/ContactIdStore";
import Error from "../../shared/components/layout/Error";
import { View } from "react-native";

const ContactProfileScreen = ({ route }) => {
  const { id } = route.params;
  const setId = useContactIdStore((state) => state.setId);
  const { data, isError, error, isLoading } = useGetContactProfile();

  useEffect(() => {
    setId(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (!data) {
    return <Typography>No data available.</Typography>;
  }

  return (
    <>
      <ProfileHeader />
      <TabViewExample />
    </>
  );
};

export default ContactProfileScreen;
