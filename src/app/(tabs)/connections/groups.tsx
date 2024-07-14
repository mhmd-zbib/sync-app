import data from "@/__test__/data/Groups.json";
import GroupsList from "@/features/Group/components/Groups-List";
import React from "react";

const GroupsScreen = () => {
  return <GroupsList scrollEnabled={false} data={data} />;
};

export default GroupsScreen;
