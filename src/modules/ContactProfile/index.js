import React from "react";
import Loading from "../../shared/components/layout/Loading";
import ProfileHeader from "./features/Header";
import useContactProfile from "./hooks/useContactProfile";
import useContactProfileStore from "./stores/useContactProfileStore";
import TabViewExample from "./features/TabView";

const ContactProfileScreen = ({ route }) => {
  const { id } = route.params;
  const { data, isError, error, isLoading, isSuccess } = useContactProfile(id);
  const { setContactData, contactData } = useContactProfileStore();

  if (isLoading) return <Loading />;
  if (isError) console.error(error);

  console.log(contactData, "this is data");

  return (
    <>
      <ProfileHeader />
      <TabViewExample />
    </>
  );
};

export default ContactProfileScreen;
