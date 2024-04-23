import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTagListQuery } from "../../../../queries/tags/useTagListQuery";
import { useContactDetailsStore } from "../../../../stores/contacts/useContactDetailsStore";

const useContactTagsList = () => {
  const { tags } = useContactDetailsStore((state) => state.contactDetails);
  const firstFourTags = tags.slice(0, 4);
  const remaining = tags.length - firstFourTags.length;
  return { tags, remaining };
};

export default useContactTagsList;
