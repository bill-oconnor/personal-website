import { Resource } from "../../../../lib/types/Content";
import { Badge, Card, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

export interface IProps {
  resource: Resource;
}

export const ResourceCard = (props: IProps) => {
  const { resource } = props;

  return (
    <Card>
      <Card.Section>
        <Image alt="" src={resource.image} />
      </Card.Section>
      <Card.Section>
        <Stack>
          <Text size="xl">{resource.title}</Text>
          <Group>
            {resource.tags.map((t) => (
              <Badge key={t} variant="light" color={"orange"}>
                {t}
              </Badge>
            ))}
          </Group>
          <Text color="gray">{resource.description}</Text>
        </Stack>
      </Card.Section>
    </Card>
  );
};
