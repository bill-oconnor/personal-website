import { Resource } from "../../../../lib/types/Content";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";
import { useStyles } from "./styles";
import { useScrollIntoView } from "@mantine/hooks";
import { useEffect } from "react";

export interface IProps {
  resource: Resource;
}

export const ResourceDetailCard = (props: IProps) => {
  const { resource } = props;
  const { classes } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 1,
    duration: 600,
  });

  useEffect(() => {
    if (targetRef.current) {
      scrollIntoView();
    }
  }, [targetRef?.current, scrollIntoView]);

  return (
    <div ref={targetRef}>
      <Card className={classes.resourceDetailCard} withBorder p="xl">
        {resource.image ? (
          <Card.Section>
            <Box sx={{ height: 400 }}>
              <Image alt="" src={resource.image} height={400} fit={"cover"} />
            </Box>
          </Card.Section>
        ) : null}
        <Stack>
          <Title order={3} mt="2rem">
            {resource.title}
          </Title>
          {resource.tags?.length ? (
            <>
              <Divider />

              <Group>
                {resource.tags.map((t) => (
                  <Badge key={t} variant="light" color={"orange"}>
                    {t}
                  </Badge>
                ))}
              </Group>
            </>
          ) : null}
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
    </div>
  );
};
