import { useNavigation } from "@react-navigation/native";

export default function useHandleGroupConnections(
  selectedContacts,
  setSelectedContacts
) {
  const navigation = useNavigation();

  const navigateToSelectConnections = () => {
    navigation.navigate("ContactSelectListScreen", {
      selectedContacts,

      onGoBack: (data) => {
        setSelectedContacts(data);
      },
    });
  };

  return { navigateToSelectConnections };
}
