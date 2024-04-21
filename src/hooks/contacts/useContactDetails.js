import ContactsService from "../../services/ContactService";
import { useQuery } from "@tanstack/react-query";

export const useContactDetails = () => {
  const contactDetails = useQuery({
    queryKey: ["contactDetails"],
    queryFn: () => ContactsService.getContactDetails(userId),
  });

  //   if (isSuccess) {
  //     setContactDetails(contactDetails);
  //     console.log("done");
  //   }

  //   if (isLoading) {
  //     return <Typography>Loading...</Typography>;
  //   }

  return { contactDetails };
};
