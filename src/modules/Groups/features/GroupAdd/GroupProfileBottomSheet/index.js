import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ProfilePicture from "../../../../../shared/components/ui/cards/ProfilePicture";
import EmojiSelector from "../../../../../shared/components/ui/emoji/EmojiSelector";
import ColorPicker from "../../../../../shared/components/ui/ColorPicker";
import Switch from "../../../../../shared/components/ui/Switch";
import { COLORS } from "./Colors";

const GroupProfileBottomSheet = () => {
  const [emoji, setEmoji] = useState("grey_question");
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [isSwitchOn, setSwitchOn] = useState(true);

  console.log(emoji);
  return (
    <View style={styles.container}>
      <BottomSheetView
        style={{ alignItems: "center", justifyContent: "center", gap: 50 }}>
        <ProfilePicture emoji={emoji} size="xlg" color={backgroundColor} />
        <Switch
          isOn={isSwitchOn}
          onPress={() => {
            setSwitchOn(!isSwitchOn);
          }}
          onText="Emoji"
          offText="Style"
        />
      </BottomSheetView>
      <View style={{ height: 350, marginTop: 20 }}>
        {isSwitchOn ? (
          <EmojiSelector setEmoji={setEmoji} />
        ) : (
          <ColorPicker
            onColorSelect={(item) => {
              setBackgroundColor(item);
            }}
            colors={COLORS}
            style={{ marginTop: 20 }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default GroupProfileBottomSheet;
