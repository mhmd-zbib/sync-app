import data from "@/__test__/data/Groups.json";
import React from "react";
import ContactGroupsList from "../components/Contact-Groups-List";

const ContactGroups = () => {
  return <ContactGroupsList groups={data} />;
};

export default ContactGroups;
