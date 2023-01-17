import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

export interface IProps {
  title: string;
  subtitle: string;
}

export const HeroSection = (props: IProps) => {
  const { title, subtitle } = props;
  const { classes } = useStyles();

  return (
    <section className={classes.heroSection}>
      <Container>
        <Title order={1}>{title}</Title>
        <Text weight={700}>{subtitle}</Text>
      </Container>
    </section>
  );
};
