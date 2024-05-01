import React, { useEffect } from "react";
import Error from "../../shared/components/layout/Error";
import Loading from "../../shared/components/layout/Loading";
import Typography from "../../shared/components/ui/Typography";
import ProfileHeader from "./components/Header";
import TabViewExample from "./components/TabView";
import useGetContactProfile from "./hooks/useGetProfileInfo";
import useContactIdStore from "./stores/ContactIdStore";
import DetailPage from "../../shared/components/layout/DetailPage";

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
    return <Typography></Typography>;
  }

  return (
    <DetailPage screenTitle={"Profile"}>
      <ProfileHeader />
      <TabViewExample />
    </DetailPage>
  );
};

export default ContactProfileScreen;
