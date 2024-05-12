import React from "react";
import InputPageLayout from "../../../../shared/components/layout/InputPageLayout";
import TagList from "./components/TagList";
import useSelectTag from "./hooks/useSelectTag";
import data from "./test/data.test.json";

const TagListScreen = ({ route }) => {
  const { selected } = route.params || [];
  const { onSelectTag, print } = useSelectTag(selected);

  return (
    <InputPageLayout
      buttonTitle={"Add"}
      screenTitle={"Tags"}
      onPress={print}
      addButton>
      <TagList tags={data} onSelectTag={onSelectTag} selected={selected} />
    </InputPageLayout>
  );
};

export default TagListScreen;
