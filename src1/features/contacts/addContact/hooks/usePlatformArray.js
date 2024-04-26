import { useMemo } from "react";
import { useAddContactStore } from "../store/useAddContactStore";

const usePlatformArray = () => {
  const { formData, setFormData } = useAddContactStore();

  const allPlatforms = [
    { label: "LinkedIn", id: 1 },
    { label: "Instagram", id: 2 },
    { label: "Twitter", id: 3 },
    { label: "Facebook", id: 4 },
  ];

  const platforms = useMemo(() => {
    const usedIds = new Set(
      formData.socialMediaLink.map((link) => link.platform)
    );
    return allPlatforms.filter((platform) => !usedIds.has(platform.id));
  }, [formData.socialMediaLink]);

  return {
    platforms,
  };
};

export default usePlatformArray;
