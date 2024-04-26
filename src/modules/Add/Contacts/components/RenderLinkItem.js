import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryCard from "../../../../components/ui/cards/PrimaryCard";
import Typography from "../../../../components/ui/text/Typography";
import useHandleSocialLink from "../hooks/useHandleSocialLink";

const RenderLinkItem = ({ item, index }) => {
  const { handleDeleteSocialLinks } = useHandleSocialLink();

  return (
    <PrimaryCard>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography>{item.platform}</Typography>
        <TouchableOpacity onPress={() => handleDeleteSocialLinks(index)}>
          <Typography>D</Typography>
        </TouchableOpacity>
      </View>

      <Typography>{item.link}</Typography>
    </PrimaryCard>
  );
};

export default RenderLinkItem;

const styles = StyleSheet.create({});
