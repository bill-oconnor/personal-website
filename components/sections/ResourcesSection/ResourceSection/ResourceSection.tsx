import { Container, Paper, Title } from "@mantine/core";
import { useState } from "react";

export type RenderProps<T> = {
  setSelectedResource: (r: T) => void;
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

  return (
    <Paper id={id} withBorder>
      <Title p="xs" underline align="center" order={4}>
        {title}
      </Title>
      {selectedResource && renderResourceDetail
        ? renderResourceDetail(selectedResource)
        : null}
      <Container>{renderChildren({ setSelectedResource })}</Container>
    </Paper>
  );
}
