import React, { useState } from "react";
import { FlatList, View } from "react-native";
import useGetContacts from "../src/modules/Contacts/features/ContactList/hooks/useGetContacts";
import SearchBar from "../src/shared/components/ui/SearchBar";
import Typography from "../src/shared/components/ui/Typography";
import ConnectionItem from "./ConnectionItem.test";
import ConnectionOptionsTest from "./ConnectionOptions.test";
import { FILTER_OPTIONS } from "./FILTER_OPTIONS";
import { useNavigation } from "@react-navigation/native";
import { useGroupListQuery } from "../src/modules/Groups/queries/useGroupListQuery";
import Loading from "../src/shared/components/layout/Loading";
import { useTheme } from "../src/shared/stores/themeStore";
import EmptyList from "../src/shared/components/layout/EmptyList";
import DetailPage from "../src/shared/components/layout/DetailPage";
import useSort from "../src/shared/hooks/useSort";

const ConnectionsTestScreen = () => {
  const { data: contacts, isLoading: contactLoading } = useGetContacts();
  const { data: groups, isLoading: groupsLoading } = useGroupListQuery();
  const [filter, setFilter] = useState(FILTER_OPTIONS.Contacts);
  const theme = useTheme();

  if (contactLoading || groupsLoading) {
    return <Loading />;
  }

  const navigation = useNavigation();

  const navigateTo = () => {
    switch (filter) {
      case FILTER_OPTIONS.Contacts:
        return "ContactProfileScreen";
      case FILTER_OPTIONS.Groups:
        return "GroupDetailsScreen";
      default:
        break;
    }
  };

  const renderData = () => {
    switch (filter) {
      case FILTER_OPTIONS.Contacts:
        return contacts;
      case FILTER_OPTIONS.Groups:
        return groups;
      default:
        return null;
    }
  };

  const handlePress = (item) => {
    navigation.navigate(navigateTo(), { id: item.id });
  };

  const sorted = useSort(renderData(), "name");

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              gap: 15,
              marginHorizontal: 10,
              backgroundColor: theme.background,
              paddingBottom: 10,
              marginBottom: -10,
            }}>
            {/* <View style={{ marginHorizontal: 10, gap: 10 }}> */}
            <Typography variant="xlg" fontWeight={500}>
              Connections
            </Typography>
            <SearchBar placeHolder="Search" />
            {/* </View> */}
            <ConnectionOptionsTest setFilter={setFilter} />
          </View>
        }
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        data={sorted}
        contentContainerStyle={{
          gap: 15,
        }}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyList title={FILTER_OPTIONS[filter]} />}
        renderItem={({ item }) => (
          <ConnectionItem
            onPress={() => handlePress(item)}
            item={item}
            filter={filter}
          />
        )}
      />
    </>
  );
};

export default ConnectionsTestScreen;
