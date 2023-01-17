import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Content } from "../../../lib/types/Content";

interface ContactSectionContent {}
export type IProps = Content<ContactSectionContent>;

export const ContactSection = (_props: IProps) => {
  return (
    <section>
      <Container>
        <Title order={1}>{"// Content for hero.title"}</Title>
        <Text>{"// Content for hero.description"}</Text>
      </Container>
    </section>
  );
};
