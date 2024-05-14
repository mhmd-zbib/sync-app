import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import TagList from "./components/TagList";
import useSelectTag from "./hooks/useSelectTag";
import { useNavigation } from "@react-navigation/native";
import { useListTagQuery } from "../../queries/useListTagQuery";
import Typography from "../../../../shared/components/ui/Typography";

const TagListScreen = ({ route }) => {
  const { selected } = route.params || [];
  const { onSelectTag, print } = useSelectTag(selected);
  const { navigate } = useNavigation();
  const { data: tags } = useListTagQuery();

  console.log(tags);

  return (
    <InputPageLayout
      buttonTitle={"Add"}
      screenTitle={"Tags"}
      onPress={print}
      addButton
      onAddPress={() => navigate("TagAddScreen")}>
      <TagList tags={tags} onSelectTag={onSelectTag} selected={selected} />
    </InputPageLayout>
  );
};

export default TagListScreen;
