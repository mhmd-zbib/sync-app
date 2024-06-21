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
  tag?: TagsType;
}

export interface Group {
  id: number;
  name: string;
  createdAt: number | string;
  memberCount: number;
  color: string;
  emoji: string;
}

export interface GroupItemProps {
  group: Group;
}

export type ConnectionData = Contact | Group;
