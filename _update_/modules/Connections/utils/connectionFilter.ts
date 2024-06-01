interface Contact {
  id: number;
  name: string;
  isTagged: boolean;
  isStarred: boolean;
}

export const filterData = (
  data: Contact[],
  filter: "all" | "tagged" | "starred"
): Contact[] => {
  if (filter === "tagged") {
    return data.filter((item) => item.isTagged);
  } else if (filter === "starred") {
    return data.filter((item) => item.isStarred);
  } else {
    return data;
  }
};
