import React from "react";
import { StyleSheet } from "react-native";
import DetailPage from "../../../../shared/components/layout/DetailPage";
import Error from "../../../../shared/components/layout/Error";
import Loading from "../../../../shared/components/layout/Loading";
import OptionsModal from "../../../../shared/components/ui/OptionsModal";
import Typography from "../../../../shared/components/ui/Typography";
import useNoteDetailsQuery from "../../queries/useNoteDetailsQuery";
import useNoteModal from "./hooks/useNoteModal";

const NoteDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { data, isLoading } = useNoteDetailsQuery(id);
  const { toggleModal, modalVisible, setModalVisible, options } = useNoteModal({
    id,
    data,
  });

  if (isLoading) return <Loading />;
  if (!data) return <Error message="Note not found" />;

  return (
    <DetailPage
      onOptionPress={toggleModal}
      screenTitle="Note Details"
      style={{ paddingHorizontal: 20, gap: 20 }}>
      <Typography variant="xlg" fontWeight="500">
        {data.title}
      </Typography>
      <Typography>{data.details}</Typography>
      <OptionsModal
        options={options}
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
    </DetailPage>
  );
};

export default NoteDetailsScreen;

const styles = StyleSheet.create({});
