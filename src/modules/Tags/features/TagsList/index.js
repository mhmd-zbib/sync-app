import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import TagList from "./components/TagList";
import useSelectTag from "./hooks/useSelectTag";
import data from "./test/data.test.json";
import { useNavigation } from "@react-navigation/native";

const TagListScreen = ({ route }) => {
  const { selected } = route.params || [];
  const { onSelectTag, print } = useSelectTag(selected);
  const { navigate } = useNavigation();

  return (
    <InputPageLayout
      buttonTitle={"Add"}
      screenTitle={"Tags"}
      onPress={print}
      addButton
      onAddPress={() => navigate("TagAddScreen")}>
      <TagList tags={data} onSelectTag={onSelectTag} selected={selected} />
    </InputPageLayout>
  );
};

export default TagListScreen;
