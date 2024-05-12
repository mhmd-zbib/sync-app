import React from "react";
import Card from "../../../../shared/components/ui/cards/Card";
import ProfileExperienceItem from "../../../Profile/features/ProfileDetails/ProfileInfo/components/ProfileExperienceItem";

const ExperienceItem = ({ item }) => {
  return (
    <Card disabled>
      <ProfileExperienceItem item={item} />
    </Card>
  );
};

export default ExperienceItem;
