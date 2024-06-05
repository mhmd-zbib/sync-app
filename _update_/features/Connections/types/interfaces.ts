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
  isPinned: boolean;
  createdAt: number;
}

export interface Connections {
  id: number;
  type: string;
  name?: string;
  createdAt: number;
  isTagged?: boolean;
  isStarred?: boolean;
  memberCount?: number;
  isPinned?: boolean;
  emoji?: string;
  color?: string;
}

export interface Group {
  id: number;
  name: string;
  createdAt: number;
  memberCount: number;
  color: string;
  emoji: string;
}

export interface GroupItemProps {
  group: Group;
}

export type ConnectionData = Contact | Group;
