import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import useAddTagNavigation from "../../hooks/tags/useAddTagNavigation";
import Button from "../../components/ui/buttons/Button";
import InputText from "../../components/ui/InputText";
import { useAddTag } from "../../queries/tags/useAddTag";

const AddTagsPage = () => {
  const navigation = useAddTagNavigation();
  const [tagName, setTagName] = useState("");
  const { addTag } = useAddTag();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 24,
        marginHorizontal: 10,
      }}>
      <InputText
        label={"Tag name"}
        value={tagName}
        onChange={(txt) => {
          setTagName(txt);
        }}
      />
      <Button
        title={"Add"}
        onPress={() => {
          addTag.mutate(tagName, { onSuccess: setTagName("") });
        }}
      />
    </View>
  );
};

export default AddTagsPage;

const styles = StyleSheet.create({});
