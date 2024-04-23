import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../../stores/shared/themeStore";
import Typography from "../../../../components/ui/text/Typography";
import useContactFormStore from "../../../../stores/contacts/useAddCotactStore";
import PrimaryCard from "../../../../components/ui/cards/PrimaryCard";

const AddContactSocialCard = ({ index, platform, url }) => {
  const { removeLink } = useContactFormStore();
  const colors = useTheme();

  const handleDelete = () => {
    removeLink(index);
  };

  return (
    <PrimaryCard>
      <View style={styles.card}>
        <View style={styles.row}>
          <Typography variant="lg">{platform}</Typography>
          <TouchableOpacity onPress={handleDelete}>
            <Typography>Delete</Typography>
          </TouchableOpacity>
        </View>
        <Typography color={colors.textSecondary}>{url} </Typography>
      </View>
    </PrimaryCard>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AddContactSocialCard;
