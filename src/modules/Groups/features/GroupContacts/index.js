import React from "react";
import { StyleSheet } from "react-native";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import { useGroupContactsQuery } from "../../queries/useGroupContactsQuery";
import useGroupIdStore from "../../store/useGroupIdStore";
import GroupContactList from "./components/GroupContactList";

const GroupContactTab = () => {
  const id = useGroupIdStore((state) => state.id);
  const { data, isLoading, isError, error } = useGroupContactsQuery(id);

  console.log(data, " data");

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;
  return <GroupContactList data={data} />;
};

export default GroupContactTab;

const styles = StyleSheet.create({});
