/**
 * Render item with nested views, a card for each contact
 *
 * @param {Function} onPress - pass the function that will happen upon pressing on the card
 * @param {Object} item - pass the data for each contact user
 *
 *
 */

import React from "react";
import { StyleSheet } from "react-native";
import ItemCard from "../../../../../shared/components/ui/cards/ItemCard";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";

const ContactItem = ({ onPress, item, selectMode, selected, onLongPress }) => {
  return (
    <ItemCard
      onLongPress={onLongPress}
      onPress={onPress}
      name={item.name}
      rightInfo={DateTimeFormatter.formatFullDate(item.created_at)}
      selectMode={selectMode}
      selected={selected}
    />
  );
};

export default ContactItem;

const styles = StyleSheet.create({});
