import { useMutation, useQueryClient } from "@tanstack/react-query";
import GroupServices from "../services/GroupServices";
import { useNavigation } from "@react-navigation/native";

/**
 * Group adding mutation
 * @param {Int} id - Group id
 * @param {Array} contactsId - Array of contact's id to added to the group
 *
 */

export function useGroupAddContactMutation() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  return useMutation({
    mutationKey: "AddGroup",
    mutationFn: async ({ id, contactsId, timestamp }) => {
      console.log(id, contactsId, timestamp);

      GroupServices.addContacts(id, contactsId, timestamp);
    },

    onSuccess: (id) => {
      // navigation.goBack();
      queryClient.invalidateQueries(["GroupDetails"], id);
    },
    onError: (error) => {
      console.error("Error creating group:", error);
    },
  });
}
