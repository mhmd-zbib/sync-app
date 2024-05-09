import React, { useState, useEffect } from "react";
import { View, BackHandler, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGroupDetailsQuery } from "../../queries/useGroupDetailsQuery";
import useGroupIdStore from "../../store/useGroupIdStore";
import useGroupContactSelectModeStore from "../../store/useGroupContactSelectModeStore";
import useDeleteGroupContact from "../GroupContacts/hooks/useDeleteGroupContact";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import Loading from "../../../../shared/components/layout/Loading";
import Typography from "../../../../shared/components/ui/Typography";
import ProfilePicture from "../../../../shared/components/ui/cards/ProfilePicture";
import DateTimeFormatter from "../../../../shared/hooks/useFormatDate";
import GroupTabView from "./components/GroupTabView";
import GroupOptionsModal from "./components/GroupOptionsModal";

const GroupDetailsScreen = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = route.params;
  const navigation = useNavigation();
  const setId = useGroupIdStore((state) => state.setId);
  const { data, isLoading } = useGroupDetailsQuery(id);
  const { selectMode, setSelectMode } = useGroupContactSelectModeStore();
  const { deleteContacts } = useDeleteGroupContact();

  useEffect(() => {
    setId(id);
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (selectMode) {
          setSelectMode(false);
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [selectMode, setId, setSelectMode]);

  const toggleModal = () => setModalVisible(!modalVisible);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DetailPage
        onDelete={() => deleteContacts(id)}
        deleteButton={selectMode}
        screenTitle={data?.name || "Group Details"}
        onBackPress={
          selectMode
            ? () => setSelectMode(false)
            : () => navigation.navigate("Connections")
        }
        onOptionPress={toggleModal}>
        <View style={styles.profileContainer}>
          <ProfilePicture
            emoji={data?.emoji}
            size="lg"
            color={data?.background_color}
          />
          <View style={styles.textContainer}>
            <Typography variant="lg" fontWeight={500}>
              {data?.name}
            </Typography>
            <Typography>
              {DateTimeFormatter.formatFullDate(data?.created_at)}
            </Typography>
          </View>
        </View>
        <GroupTabView />
      </DetailPage>
      <GroupOptionsModal
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 10,
  },
  textContainer: {
    justifyContent: "space-around",
  },
});

export default GroupDetailsScreen;
