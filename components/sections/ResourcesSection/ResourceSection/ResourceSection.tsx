import { Container, Paper, Title } from "@mantine/core";
import { useState } from "react";
import { useStyles } from "./styles";

export type RenderProps<T> = {
  setSelectedResource: (r: T) => void;
  selectedResourceId: string;
};

export type IProps<T> = {
  title: string;
  id: string;
  renderChildren: (renderProps: RenderProps<T>) => JSX.Element;
  renderResourceDetail?: (selectedResource: T) => JSX.Element;
};

export function ResourceSection<ResourceDataFormat>(
  props: IProps<ResourceDataFormat>
) {
  const { title, id, renderResourceDetail, renderChildren } = props;
  const [selectedResource, setSelectedResource] =
    useState<ResourceDataFormat | null>(null);
  const { classes } = useStyles();
  return (
    <Paper
      id={id}
      className={classes.resourceSection}
      mb="xs"
      pb="md"
      withBorder
    >
      <Title p="xl" underline align="center" order={3}>
        {title}
      </Title>

      {selectedResource && renderResourceDetail ? (
        <Container mb="md">{renderResourceDetail(selectedResource)}</Container>
      ) : null}
      <Container>
        {renderChildren({
          setSelectedResource,
          selectedResourceId: selectedResource?.id,
        })}
      </Container>
    </Paper>
  );
}
