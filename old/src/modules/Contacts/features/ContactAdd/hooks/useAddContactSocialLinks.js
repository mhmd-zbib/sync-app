export default function useAddContactSocialLinks() {
  const platforms = [
    { name: "LinkedIn", id: 1 },
    { name: "Instagram", id: 2 },
    { name: "Facebook", id: 3 },
    { name: "Twitter", id: 4 },
  ];

  const onSelect = (item) => {
    console.log(item);
  };

  return { onSelect, platforms };
}
