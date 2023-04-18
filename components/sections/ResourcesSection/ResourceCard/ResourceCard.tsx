import { Resource } from "../../../../lib/types/Content";
import { Badge, Card, Divider, Group, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";

export interface IProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
  selected: boolean;
}

export const ResourceCard = (props: IProps) => {
  const { resource, onSelect, selected } = props;
  const { classes } = useStyles({ selected });

  return (
    <Card
      className={classes.resourceCard}
      withBorder
      sx={{ maxHeight: 400 }}
      onClick={() => onSelect(resource)}
    >
      {resource.image ? (
        <Card.Section>
          <Image alt="" src={resource.image} />
        </Card.Section>
      ) : null}
      <Card.Section p={"1.4rem"}>
        <Stack spacing="sm">
          <Title order={4}>{resource.title}</Title>
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
