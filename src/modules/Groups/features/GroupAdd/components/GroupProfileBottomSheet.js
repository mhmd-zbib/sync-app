import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import EmojiSelector from "../../../../../shared/components/ui/emoji/EmojiSelector";
import ColorPicker from "../../../../../shared/components/ui/ColorPicker";
import Switch from "../../../../../shared/components/ui/Switch";
import { COLORS } from "./Colors";
import useGroupProfileStore from "../stores/useGroupProfileStore";

const GroupProfileBottomSheet = () => {
  const [isSwitchOn, setSwitchOn] = useState(true);
  const { emoji, backgroundColor, setEmoji, setBackgroundColor } =
    useGroupProfileStore();

  useEffect(() => {
    if (!emoji && !backgroundColor) {
      setEmoji("grey_question");
      setBackgroundColor(COLORS.blue);
    }
  }, []);

  return (
    <>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          marginVertical: 80,
        }}>
        <ProfilePicture emoji={emoji} size="xlg" color={backgroundColor} />
        <Switch
          isOn={isSwitchOn}
          onText={"Emoji"}
          offText={"Style"}
          onPress={() => {
            setSwitchOn(!isSwitchOn);
          }}
        />
      </View>
      {isSwitchOn ? (
        <EmojiSelector setEmoji={setEmoji} />
      ) : (
        <ColorPicker colors={COLORS} onColorSelect={setBackgroundColor} />
      )}
    </>
  );
};

export default GroupProfileBottomSheet;
