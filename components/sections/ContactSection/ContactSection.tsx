import {
  Box,
  Button,
  Notification,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Transition,
} from "@mantine/core";
import React, { useState } from "react";
import { Content } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import { useForm } from "@mantine/form";
import { useStyles } from "./styles";
import { submitContactMessage } from "../../../lib/api/contact";
import { IconCheck } from "@tabler/icons";
interface ContactSectionContent {
  title: string;
  subtitle?: string;
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
  const { classes } = useStyles();
  const [sentMessage, setSentMessage] = useState(false);

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
    <Section id="contact" withPaper className={classes.contactSection}>
      <Box px="xl">
        <Stack spacing={0} mb="lg">
          <Title color="orange" order={2}>
            {content?.title}
          </Title>
          <Text size={14}>{content?.subtitle}</Text>
        </Stack>

        <Transition
          mounted={sentMessage}
          transition="pop"
          duration={800}
          timingFunction="ease"
        >
          {(styles) => (
            <Notification
              icon={<IconCheck size={18} />}
              color="teal"
              title="Message Sent"
              disallowClose
              style={styles}
            >
              Thank you for reaching out. I look forward to connecting
            </Notification>
          )}
        </Transition>
        {sentMessage ? null : (
          <form
            onSubmit={form.onSubmit((values) =>
              submitContactMessage(values.email, values.message).then(() => {
                form.reset();
                setSentMessage(true);
              })
            )}
          >
            <Stack>
              <TextInput label="Email Address" {...emailProps}></TextInput>
              <Textarea
                label="Message"
                minRows={4}
                {...messageProps}
              ></Textarea>
              <Button sx={{ maxWidth: "14em" }} type="submit">
                Send Message
              </Button>
            </Stack>
          </form>
        )}
      </Box>
    </Section>
  );
};
