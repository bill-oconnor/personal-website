import { Resource } from "../../../../lib/types/Content";
import { Badge, Card, Divider, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

export interface IProps {
  resource: Resource;
}

export const ResourceCard = (props: IProps) => {
  const { resource } = props;

  return (
    <Card withBorder shadow={"md"} sx={{ maxWidth: 300, maxHeight: 400 }}>
      {resource.image ? (
        <Card.Section>
          <Image alt="" src={resource.image} />
        </Card.Section>
      ) : null}
      <Card.Section px={14} py={8}>
        <Stack>
          <Text size="xl">{resource.title}</Text>
          <Divider />
          {resource.tags?.length ? (
            <Group>
              {resource.tags?.map((t) => (
                <Badge key={t} variant="light" color={"orange"}>
                  {t}
                </Badge>
              ))}
            </Group>
          ) : null}
          <Text lineClamp={4} color="gray" size={14}>
            {resource.description}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  );
};
