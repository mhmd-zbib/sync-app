import { useMutation, useQueryClient } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";
import { useNavigation } from "@react-navigation/native";

/**
 * Group adding mutation
 * @param {Int} id - Group id to be deleted
 *
 */

export function useGroupDeleteMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "AddGroup",
    mutationFn: async (id) => {
      GroupServices.delete(id);
    },

    onSuccess: () => {
      navigation.goBack();
      queryClient.invalidateQueries(["GroupList"]);
    },
    onError: (error) => {
      console.error("Error creating group:", error);
    },
  });
}
