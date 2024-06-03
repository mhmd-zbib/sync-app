interface Doctor {
  id: number;
  name: string;
  description: string;
  contact: {
    phone_number: number;
    email_address: string;
  };
  experience: {
    title: string;
    company_name: string;
    description: string;
    from_date: number;
    to_date: string | null;
  }[];
  tags: {
    id: number;
    name: string;
    color: string;
  }[];
  birthday: number;
}

interface TagsType {
  name: string;
  id: number;
  color: string;
}

interface ExperienceType {
  title: string;
  company_name: string;
  description: string;
  from_date: number;
  to_date: number | undefined;
}
