import {
  Box,
  Container,
  GroupedTransition,
  Paper,
  Stack,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { transitions } from "@mantine/core/lib/Transition/transitions";
import React, { useEffect, useState } from "react";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

export interface IProps {
  content: { title: string; description: string };
}

export const HeroSection = (props: IProps) => {
  const { content } = props;
  const { classes } = useStyles();

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
          }}
        >
          {(styles) => (
            <div style={styles.section}>
              <Paper p="10rem" className={classes.content}>
                <Stack>
                  <Title style={styles.title} order={1}>
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
