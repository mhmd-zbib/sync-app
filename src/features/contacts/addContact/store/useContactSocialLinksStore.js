import create from "zustand";

const useSocialLinksStore = create((set) => ({
  socialLink: "",
  platform: "",
  setSocialLink: (link, platform) =>
    set({
      socialLink: link,
      platform: platform,
    }),
}));

export default useSocialLinksStore;
