import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagService from "../services/TagService";

/**
 * Tag adding mutation
 * @param {Array} groupData - Group data to be added (name, color)
 *
 */

export default function useAddTagMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "AddTag",
    mutationFn: async (tagData) => {
      return await TagService.create(tagData);
    },

    onSuccess: () => {
      navigation.goBack();
      queryClient.invalidateQueries(["TagList"]);
    },
    onError: (error) => {
      console.error("Error creating group:", error);
    },
  });
}
