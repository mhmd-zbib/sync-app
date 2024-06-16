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

export interface Contact {
  id: number;
  name: string;
  isTagged?: boolean;
  isStarred?: boolean;
  isPinned?: boolean;
  createdAt: number;
  tag?: TagsType;
}
