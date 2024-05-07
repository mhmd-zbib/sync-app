import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
export default function useNavigationRefetch({
  route,
  queryKeys,
  navigationParams = {},
}) {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  if (route === "back") {
    navigation.goBack();
  } else {
    navigation.navigate(route, navigationParams);
  }

  try {
    for (let queryKey of queryKeys) {
      queryClient.invalidateQueries(queryKey);
    }
  } catch (e) {
    console.error("An error occurred: ", e);
  }
}
