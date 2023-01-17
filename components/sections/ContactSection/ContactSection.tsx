import {
  Button,
  Container,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { Content } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import { useForm } from "@mantine/form";
interface ContactSectionContent {
  prompt: string;
  subPrompt?: string;
}
export type IProps = Content<ContactSectionContent>;

/**
 *
 * manage loading state
 * set size of text area
 * manage form
 *
 */
export const ContactSection = (props: IProps) => {
  const { content } = props;
  const form = useForm({
    initialValues: {
      message: "",
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length > 20
          ? null
          : "Please say something at least 20 characters long",
    },
  });

  const messageProps = form.getInputProps("message");
  const emailProps = form.getInputProps("email");

  return (
    <Section
      id="contact"
      title="Contact"
      backgroundImage="https://www.toptal.com/designers/subtlepatterns/uploads/tactile_noise.png"
    >
      <Container>
        <Title order={2}>{content?.prompt}</Title>
        <Text>{content?.subPrompt}</Text>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack>
            <TextInput label="Email Address" {...emailProps}></TextInput>
            <Textarea label="Message" minRows={4} {...messageProps}></Textarea>
            <Button sx={{ maxWidth: "14em" }} type="submit">
              Send Message
            </Button>
          </Stack>
        </form>
      </Container>
    </Section>
  );
};
