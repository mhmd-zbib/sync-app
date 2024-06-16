import GroupsList from "@/modules/Group/features/Groups-List";
import React from "react";
import data from "@/__test__/data/Groups.json";

const GroupsScreen = () => {
  return <GroupsList data={data} />;
};

export default GroupsScreen;
