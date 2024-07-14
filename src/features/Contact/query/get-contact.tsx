import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

const DATA = {
  name: "Mohammad Zbib",
  description: "afafas",
  birthday: 188550000,
  phone: "8468464",
  email: "afsasfasa",
  links: [
    { platform: "facebook", link: "https://www.facebook.com/example" },
    { platform: "linkedin", link: "https://www.linkedin.com/in/example" },
    { platform: "github", link: "https://github.com/example" },
    { platform: "twitter", link: "https://twitter.com/example" },
    { platform: "instagram", link: "https://www.instagram.com/example" },
    { platform: "youtube", link: "https://www.youtube.com/example" },
    { platform: "pinterest", link: "https://www.pinterest.com/example" },
    { platform: "reddit", link: "https://www.reddit.com/user/example" },
    { platform: "tumblr", link: "https://example.tumblr.com/" },
  ],
  tags: [
    { name: "contact", id: 1, color: "orange" },
    { name: "contact", id: 1, color: "red" },
    { name: "contact", id: 1, color: "purple" },
    { name: "contact", id: 1, color: "pink" },
    { name: "contact", id: 1, color: "pink" },
    { name: "contact", id: 1, color: "green" },
    { name: "contact", id: 1, color: "blue" },
  ],
  experience: [
    {
      title: "Neurochemical Doctor",
      company_name: "SynaptoSphere ",
      description:
        "At SynaptoSphere NeuroVita Clinic, we're pioneering a revolutionary approach to neurochemical healthcare. Our team of specialists delves deep into the intricate workings of the nervous system, exploring the dynamic interplay of neurotransmitters, hormones, and brain chemistry.",
      from_date: 1672404768,
      to_date: undefined,
    },
    {
      title: "Neurochemical Doctor",
      company_name: "SynaptoSphere ",
      description:
        "At SynaptoSphere NeuroVita Clinic, we're pioneering a revolutionary approach to neurochemical healthcare. Our team of specialists delves deep into the intricate workings of the nervous system, exploring the dynamic interplay of neurotransmitters, hormones, and brain chemistry.",
      from_date: 1672404768,
      to_date: undefined,
    },
  ],
};

export const getContactQueryOptions = (contactId: any) => {
  return queryOptions({
    queryKey: ["contact", contactId],
    queryFn: () => {
      console.log("called using query");

      return DATA;
    },
  });
};

type UseContactsOptions = {
  contactId: any;
  queryConfig?: QueryConfig<typeof getContactQueryOptions>;
};

export const useContact = ({ contactId, queryConfig }: UseContactsOptions) => {
  console.log("called useing me");

  return useQuery({
    ...getContactQueryOptions(contactId),
    ...queryConfig,
  });
};
