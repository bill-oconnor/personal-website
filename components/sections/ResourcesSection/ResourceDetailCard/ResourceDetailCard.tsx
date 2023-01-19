import { Resource } from "../../../../lib/types/Content";
import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";

export interface IProps {
  resource: Resource;
}

export const ResourceDetailCard = (props: IProps) => {
  const { resource } = props;
  const { classes } = useStyles();

  return (
    <Card withBorder p="xl">
      {resource.image ? (
        <Card.Section>
          <Image alt="" src={resource.image} />
        </Card.Section>
      ) : null}
      <Stack>
        <Text size="xl">{resource.title}</Text>
        <Divider />
        {resource.tags?.length ? (
          <Group>
            {resource.tags.map((t) => (
              <Badge key={t} variant="light" color={"orange"}>
                {t}
              </Badge>
            ))}
          </Group>
        ) : (
          <Text size={"sm"}>No tags listed</Text>
        )}
        <Divider />

        <Text>{resource.description}</Text>
        {resource.href ? (
          <a
            target="_blank"
            href={resource.href}
            rel="noreferrer"
            style={{ width: "min-content" }}
          >
            <Button>{`Visit ${`${resource.type
              .charAt(0)
              .toUpperCase()}${resource.type.substring(1)}`}`}</Button>
          </a>
        ) : null}
      </Stack>
    </Card>
  );
};
