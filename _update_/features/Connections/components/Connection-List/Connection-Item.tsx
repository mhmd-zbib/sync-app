/**
 * Connection items have same render item with diff modifications
 * this is the main format of the cards
 */

import { Card } from "@/components/Card";
import { Link } from "expo-router";
import React from "react";

const ConnectionItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} asChild>
      <Card
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}>
        {children}
      </Card>
    </Link>
  );
};

export default ConnectionItem;
