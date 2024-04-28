import { StyleSheet, View } from "react-native";
import NoteCard from "../../../../../shared/components/ui/cards/NoteCard";

const NoteItem = ({ item }) => {
  return (
    <NoteCard
      variant={"secondary"}
      date={item.date_created}
      title={item.title}
      description={item.description}
    />
  );
};

export default NoteItem;

const styles = StyleSheet.create({});
