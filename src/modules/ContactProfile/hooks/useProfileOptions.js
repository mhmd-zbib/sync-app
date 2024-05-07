import useDeleteContact from "./useDeleteContact";

export default function useProfileOptions() {
  const { deleteContact } = useDeleteContact();
  const options = [
    {
      title: "Edit",
      onPress: () => {
        navigation.navigate("AddNoteScreen", { data });
        toggleModal();
      },
      color: "white",
    },
    {
      title: "Delete",
      onPress: () => {
        deleteNote.mutate();
        toggleModal();
      },
      color: "red",
    },
  ];

  return;
}
