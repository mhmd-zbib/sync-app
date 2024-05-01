import { StyleSheet, View } from "react-native";
import NoteCard from "../../../../../shared/components/ui/cards/NoteCard";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";

const NoteItem = ({ item, onPress }) => {
  return (
    <NoteCard
      onPress={onPress}
      variant={"secondary"}
      date={DateTimeFormatter.formatTimeDayMonthYear(item.created_at)}
      title={item.title}
      description={item.details}
    />
  );
};

export default NoteItem;

const styles = StyleSheet.create({});