import { FilterOptions } from "./enums";

export interface ContactItemProps {
  contact: Contact;
  onPress?: () => void;
}

export interface ConnectionListHeaderProps {
  filter: FilterOptions;
  setFilter: (filter: FilterOptions) => void;
}

export interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}

export interface Connections {
  id: number;
  type: string;
  name?: string;
  createdAt: number;
  isTagged?: boolean;
  isStarred?: boolean;
  memberCount?: number;
}

export interface Group {
  id: number;
  name: string;
  createdAt: number;
  memberCount: number;
}

export interface GroupItemProps {
  group: Group;
}

export type ConnectionData = Contact | Group;
