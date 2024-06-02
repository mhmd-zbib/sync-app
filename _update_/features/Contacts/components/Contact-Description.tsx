import ThemedText from "@/components/ThemedText";
import React from "react";
import EmptyComponent from "./Empty-Component";

const ContactDescription = ({ description }: { description?: string }) => {
  if (!description) return <EmptyComponent />;

  return <ThemedText>{description}</ThemedText>;
};

export default ContactDescription;
