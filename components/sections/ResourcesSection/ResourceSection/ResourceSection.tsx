import { Container, Paper, Title } from "@mantine/core";
import { useState } from "react";
import breakpoints from "../../../../constants/breakpoints";
import { useBreakpoint } from "../../../../lib/hooks/useBreakpoint";
import { useStyles } from "./styles";

export type RenderProps<T> = {
  setSelectedResource: (r: T) => void;
  selectedResourceId?: string;
};

export type IProps<T> = {
  title: string;
  id: string;
  renderChildren: (renderProps: RenderProps<T>) => JSX.Element;
  renderResourceDetail?: (selectedResource: T) => JSX.Element | null;
};

export function ResourceSection<ResourceDataFormat extends { id: string }>(
  props: IProps<ResourceDataFormat>
) {
  const { title, id, renderResourceDetail, renderChildren } = props;
  const breakpoint = useBreakpoint();
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
      px={breakpoint <= breakpoints.SMALL ? 0 : "md"}
    >
      <Title p="xl" underline align="center" order={3}>
        {title}
      </Title>

      {selectedResource &&
      renderResourceDetail &&
      renderResourceDetail(selectedResource) ? (
        <Container mb="md">{renderResourceDetail(selectedResource)}</Container>
      ) : null}
      <Container px={breakpoint <= breakpoints.SMALL ? ".2rem" : "md"}>
        {renderChildren({
          setSelectedResource,
          selectedResourceId: selectedResource?.id,
        })}
      </Container>
    </Paper>
  );
}
