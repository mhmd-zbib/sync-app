import data from "@/__test__/data/Groups.json";
import GroupsList from "@/modules/Group/features/Groups-List";
import React from "react";

const ContactGroupsScreen = () => {
  return <GroupsList data={data} />;
};

export default ContactGroupsScreen;
