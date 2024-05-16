import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import ExperienceService from "../services/ExperienceService";
import useProfileIdStore from "../../Profile/store/useProfileIdStore";

export function useExperienceMutation() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const { id } = useProfileIdStore();

  return useMutation({
    mutationKey: ["AddExperience"],
    mutationFn: (expData) => {
      ExperienceService.create(id, expData);
    },
    onSuccess: () => {
      navigation.navigate("ContactProfileScreen");
      queryClient.invalidateQueries(["Profile"]);
    },
    onError: (error) => {
      console.error("Error deleting note:", error);
    },
  });
}
