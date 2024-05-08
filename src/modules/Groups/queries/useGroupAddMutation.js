import { useMutation, useQueryClient } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";
import { useNavigation } from "@react-navigation/native";

/**
 * Group adding mutation
 * @param {Array} groupData - Group data to be added (name, emoji, background color, time stamp)
 *
 */

export function useGroupAddMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "AddGroup",
    mutationFn: async (groupData) => {
      console.log("Group data:", groupData);
      const groupCreate = await GroupServices.create(groupData);
      return await GroupServices.addContacts(
        groupCreate,
        groupData.selectedContacts
      );
    },

    onSuccess: (id) => {
      navigation.navigate("GroupDetails", { id: id });

      queryClient.invalidateQueries(["GroupList"]);
    },
    onError: (error) => {
      console.error("Error creating group:", error);
    },
  });
}
