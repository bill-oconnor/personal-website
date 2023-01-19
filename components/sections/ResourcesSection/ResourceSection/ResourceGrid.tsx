import { SimpleGrid } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Resource } from "../../../../lib/types/Content";
import { ResourceCard } from "../ResourceCard/ResourceCard";

interface IProps {}

export const ResourceGrid = (props: PropsWithChildren<IProps>) => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 850, cols: 2, spacing: "sm" },
        { maxWidth: 620, cols: 1, spacing: "sm" },
      ]}
    >
      {props.children}
    </SimpleGrid>
  );
};
