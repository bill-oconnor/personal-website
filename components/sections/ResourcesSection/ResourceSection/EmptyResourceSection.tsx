import { Text } from "@mantine/core";

type EmptyMessageVariety = "WIP" | "n/a";

interface IProps {
  resourceName: string;
  variety: EmptyMessageVariety;
}

const wipMessage = (resource: string) =>
  `Work in progress! No ${resource} to display. Hope to have em ready soon`;

const naMessage = (_resource: string) =>
  "None so far. If you like what I am about and would like to work together, please reach out via the contact form below";

const varietyMessageGenerator = (variety: EmptyMessageVariety) => {
  if (variety === "WIP") {
    return wipMessage;
  } else if (variety === "n/a") {
    return naMessage;
  } else {
    return () => "";
  }
};

export const EmptyResourceSection = (props: IProps) => {
  return (
    <Text color={"gray"} align="center" py="xl">
      {varietyMessageGenerator(props.variety)(props.resourceName)}
    </Text>
  );
};
