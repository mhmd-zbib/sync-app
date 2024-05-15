import React from "react";
import ExperienceList from "./components/ExperienceList";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import { useNavigation } from "@react-navigation/native";

const ExperienceListScreen = ({ route }) => {
  const { experience } = route.params;
  const { navigate } = useNavigation();

  return (
    <DetailPage
      optionButton={false}
      screenTitle={"Experience"}
      addButton
      onAddPress={() => navigate("ExperienceAddScreen")}>
      <ExperienceList data={experience} />
    </DetailPage>
  );
};

export default ExperienceListScreen;
