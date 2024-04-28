import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../../shared/components/ui/Typography";
import NoteList from "./components/NoteList";

const NotesTab = () => {
  return (
    <>
      <NoteList />
    </>
  );
};

export default NotesTab;

const styles = StyleSheet.create({});
