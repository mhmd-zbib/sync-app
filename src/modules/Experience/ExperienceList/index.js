import React from "react";
import ExperienceList from "./components/ExperienceList";
import DetailPage from "../../../shared/components/layout/DetailPage";

const ExperienceListScreen = ({ route }) => {
  const { experience } = route.params;

  return (
    <DetailPage optionButton={false} screenTitle={"Experience"} addButton>
      <ExperienceList data={experience} />
    </DetailPage>
  );
};

export default ExperienceListScreen;
