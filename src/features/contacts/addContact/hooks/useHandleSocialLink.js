import { useAddContactStore } from "../store/useAddContactStore";

const useHandleSocialLink = () => {
  const { formData, setFormData } = useAddContactStore();

  const handleDeleteSocialLinks = (index) => {
    const newLinks = formData.socialMediaLink.filter((_, idx) => idx !== index);
    setFormData("socialMediaLink", newLinks);
  };

  const handleAddSocialLinks = (link, platform) => {
    const newLink = { link: link, platform: platform };
    setFormData("socialMediaLink", [...formData.socialMediaLink, newLink]);
  };

  return { handleAddSocialLinks, handleDeleteSocialLinks };
};

export default useHandleSocialLink;
