import { Container, Text, Title } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <Container>
        <Title order={1}>{"// Content for hero.title"}</Title>
        <Text>{"// Content for hero.description"}</Text>
      </Container>
    </section>
  );
};
