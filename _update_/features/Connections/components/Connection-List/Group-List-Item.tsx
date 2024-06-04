import Avatar from "@/components/Avatar";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { GroupItemProps } from "../../types/interfaces";
import ConnectionItem from "./Connection-Item";

const GroupListItem = ({ group }: GroupItemProps) => {
  return (
    <ConnectionItem href="">
      <Avatar name={group.name} />
      <ThemedText>{group.name}</ThemedText>

      <ThemedText>{group.memberCount}</ThemedText>
    </ConnectionItem>
  );
};

export default GroupListItem;
