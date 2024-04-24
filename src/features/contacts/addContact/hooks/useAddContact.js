import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAddContactStore } from "../store/useAddContactStore";
import { useAddContactMutation } from "../queries/useAddContactMutation";

const useAddContact = () => {
  const { formData, resetForm } = useAddContactStore();
  const queryClient = useQueryClient();
  const addContactMutation = useAddContactMutation();

  const submitContact = React.useCallback(() => {
    console.log("submitContact called with formData:", formData);
    if (!formData) {
      console.error("No formData to submit");
      return;
    }

    addContactMutation.mutate(formData, {
      onSuccess: () => {
        console.log(
          "Mutation succeeded, invalidating queries and resetting form"
        );
        queryClient.invalidateQueries(["contactNameList"]);
        resetForm();
      },
      onError: (error) => {
        console.error("Mutation failed:", error);
      },
    });
  }, [formData, addContactMutation, queryClient, resetForm]);

  return { submitContact };
};

export default useAddContact;
