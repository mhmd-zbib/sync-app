import { StyleSheet } from "react-native";
import NoteCard from "../../../../../shared/components/ui/cards/NoteCard";

const NoteItem = ({ item, onPress }) => {
  return (
    <NoteCard
      onPress={onPress}
      variant={"secondary"}
      date={item.created_at}
      title={item.title}
      description={item.details}
    />
  );
};

export default NoteItem;

const styles = StyleSheet.create({});
