import React from "react";
import { StyleSheet } from "react-native";
import GroupContactList from "./components/GroupContactList";
import { useGroupContactsQuery } from "../../queries/useGroupContactsQuery";
import Loading from "../../../../shared/components/layout/Loading";
import Error from "../../../../shared/components/layout/Error";

const GroupContactTab = () => {
  const { data, isLoading, isError, error } = useGroupContactsQuery(2);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  return <GroupContactList data={data} />;
};

export default GroupContactTab;

const styles = StyleSheet.create({});
