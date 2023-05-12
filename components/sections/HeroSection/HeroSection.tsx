import {
  Box,
  Container,
  Group,
  GroupedTransition,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useBreakpoint } from "../../../lib/hooks/useBreakpoint";

import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

export interface IProps {
  content: { title: string; description: string };
}

export const HeroSection = (props: IProps) => {
  const { content } = props;
  const breakpoint = useBreakpoint();
  const { classes } = useStyles({ breakpoint });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 800);
  }, []);

  return (
    <Section className={classes.heroSection}>
      <Container>
        <GroupedTransition
          mounted={mounted}
          transitions={{
            title: {
              transition: "pop",
              duration: 800,
              timingFunction: "ease",
            },
            description: {
              transition: "pop",
              duration: 1600,
              timingFunction: "ease",
            },
            section: {
              transition: "pop",
              duration: 600,
              timingFunction: "ease",
            },
            profPic: {
              transition: "pop",
              duration: 600,
              timingFunction: "ease",
            },
          }}
        >
          {(styles) => (
            <div style={styles.section}>
              <Paper className={classes.content}>
                <Stack>
                  <div style={styles.profPic}>
                    <Group align={"center"} position="center">
                      <Box className={classes.imageContainer}>
                        <Image
                          alt="My Face"
                          fit={"contain"}
                          src={"/headshot.jpg"}
                        />
                      </Box>
                    </Group>
                  </div>

                  <Title
                    style={styles.title}
                    className={classes.title}
                    order={1}
                  >
                    {content?.title ?? ""}
                  </Title>
                  {content?.description.split(".").map((desc) => (
                    <Text key={desc} style={styles.description} size="lg">
                      {desc ?? ""}
                    </Text>
                  ))}
                </Stack>
              </Paper>
            </div>
          )}
        </GroupedTransition>
      </Container>
    </Section>
  );
};
