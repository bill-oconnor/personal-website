import {
  Container,
  GroupedTransition,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { transitions } from "@mantine/core/lib/Transition/transitions";
import React, { useEffect, useState } from "react";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

export interface IProps {
  content: { title: string; subtitle: string };
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
              transition: "slide-up",
              duration: 800,
              timingFunction: "ease",
            },
            subtitle: {
              transition: "slide-up",
              duration: 1200,
              timingFunction: "ease",
            },
          }}
        >
          {(styles) => (
            <>
              <Title style={styles.title} order={1}>
                {content?.title ?? ""}
              </Title>
              <Text style={styles.subtitle} size="xl" weight={700}>
                {content?.subtitle ?? ""}
              </Text>
            </>
          )}
        </GroupedTransition>
      </Container>
    </Section>
  );
};
