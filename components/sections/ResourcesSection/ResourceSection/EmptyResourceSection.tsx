import { Text } from "@mantine/core";

interface IProps {
  resourceName: string;
}

export const EmptyResourceSection = (props: IProps) => {
  return (
    <Text
      color={"gray"}
      align="center"
      py="xl"
    >{`Work in progress! No ${props.resourceName} to display. Hope to have em ready soon`}</Text>
  );
};
