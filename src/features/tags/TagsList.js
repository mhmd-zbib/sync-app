// import React, { useState } from "react";
// import { FlatList, StyleSheet } from "react-native";
// import useSearch from "../../hooks/common/useSearch";
// import { useAddContactTags } from "../../../queries/contacts/useAddContactTags";
// import { useTagListQuery } from "../../../queries/tags/useTagListQuery";
// import { useContactDetailsStore } from "../../../stores/contacts/useContactDetailsStore";
// import { useTagSearchStore } from "../../../stores/tags/useTagSearchStore";
// import Button from "../../ui/buttons/Button";
// import TagRenderItem from "./TagRenderItem";
// import { useNavigation } from "@react-navigation/native";

// const TagsList = ({ route }) => {
//   const [selectedTagIds, setSelectedTagIds] = useState([]);
//   const { addContactTag } = useAddContactTags();
//   const { contactDetails } = useContactDetailsStore();
//   const { tags: selectedTags } = useContactDetailsStore(
//     (state) => state.contactDetails
//   );
//   const { data: tags } = useTagListQuery();
//   const searchTerm = useTagSearchStore((state) => state.searchTerm);
//   const filteredTags = useSearch(tags, searchTerm, "name", 200);
//   const navigation = useNavigation();

//   const handleSelectTag = (tagId) => {
//     setSelectedTagIds((prevSelected) =>
//       prevSelected.includes(tagId)
//         ? prevSelected.filter((id) => id !== tagId)
//         : [...prevSelected, tagId]
//     );
//   };

//   const handleSubmitTags = () => {
//     addContactTag.mutate({
//       tags: selectedTagIds,
//       contactId: contactDetails.id,
//     });
//     navigation.goBack();
//     setSelectedTagIds([]);
//   };

//   return (
//     <>
//       <FlatList
//         data={filteredTags}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TagRenderItem
//             item={item}
//             onSelect={() => handleSelectTag(item.id)}
//             isSelected={selectedTagIds.includes(item.id)}
//           />
//         )}
//         contentContainerStyle={styles.container}
//       />
//       <Button
//         disabled={selectedTagIds.length === 0}
//         title="Save"
//         onPress={handleSubmitTags}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 6,
//   },
// });

// export default TagsList;

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TagsList = () => {
  return (
    <View>
      <Text>TagsList</Text>
    </View>
  );
};

export default TagsList;

const styles = StyleSheet.create({});
