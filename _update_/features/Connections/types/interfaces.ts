import { FilterOptions } from "./enums";

//  Contact interface
export interface ContactData {
  id: number;
  name: string;
  created_at?: number;
}

//ContactListItem interface
export interface ContactListItem {
  contact: ContactData;
  onPress?: () => void;
}

//  ConnectionList header interface
export interface ConnectionListHeaderProps {
  filter: FilterOptions;
  setFilter: (filter: FilterOptions) => void;
}

//  ConnectionItemButton interface
export interface ConnectionTabItemProps {
  title: string;
  onPress: () => void;
  isActiveTab: boolean;
}

export interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}
