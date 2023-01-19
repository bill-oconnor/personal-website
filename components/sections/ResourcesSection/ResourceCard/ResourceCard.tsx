import { Resource } from "../../../../lib/types/Content";
import { Badge, Card, Divider, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";

export interface IProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

export const ResourceCard = (props: IProps) => {
  const { resource, onSelect } = props;
  const { classes } = useStyles();

  return (
    <Card
      className={classes.resourceCard}
      withBorder
      shadow={"sm"}
      sx={{ maxHeight: 400 }}
      onClick={() => onSelect(resource)}
    >
      {resource.image ? (
        <Card.Section>
          <Image alt="" src={resource.image} />
        </Card.Section>
      ) : null}
      <Card.Section px={14} py={8}>
        <Stack spacing="sm">
          <Text weight={700} size="xl">
            {resource.title}
          </Text>
          <Divider my={1} />
          {resource.tags?.length ? (
            <Group>
              {resource.tags?.map((t) => (
                <Badge key={t} variant="light" color={"orange"}>
                  {t}
                </Badge>
              ))}
            </Group>
          ) : null}
          <Text lineClamp={4} size={14}>
            {resource.description}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  );
};
