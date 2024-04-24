import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Button from "../../../../components/ui/buttons/Button";
import AddSocialLink from "../components/SocialLinkInput";
import RenderLinkItem from "../components/RenderLinkItem";
import { useAddContactStore } from "../store/useAddContactStore";

const ThirdSocialLink = () => {
  const { formData } = useAddContactStore();

  return (
    <>
      <AddSocialLink />
      <View style={{ gap: 10 }}>
        <FlatList
          contentContainerStyle={{ gap: 10 }}
          data={formData.socialMediaLink}
          renderItem={({ item, index }) => (
            <RenderLinkItem item={item} index={index} />
          )}
        />
      </View>
    </>
  );
};

export default ThirdSocialLink;

const styles = StyleSheet.create({});
