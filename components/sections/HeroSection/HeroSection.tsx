import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

export interface IProps {
  content: { title: string; subtitle: string };
}

export const HeroSection = (props: IProps) => {
  const { content } = props;
  const { classes } = useStyles();

  return (
    <Section className={classes.heroSection}>
      <Container>
        <Title order={1}>{content?.title ?? ""}</Title>
        <Text size="xl" weight={700}>
          {content?.subtitle ?? ""}
        </Text>
      </Container>
    </Section>
  );
};
