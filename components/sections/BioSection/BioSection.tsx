import { Container, Paper, ScrollArea, Stack, Tabs, Text } from "@mantine/core";
import React, { useState } from "react";
import { Content } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";
import ReactMarkdown from "react-markdown";

enum TabName {
  BIO = "Where I've Been",
  CURRENT = "Where I'm At",
  FUTURE = "Where I'm Going",
}

interface BioSectionContent {
  past: string;
  present: string;
  future: string;
}

export type IProps = Content<BioSectionContent>;

export const BioSection = (props: IProps) => {
  const { classes } = useStyles();
  const { content } = props;

  return (
    <Section
      title="Bio"
      id="bio"
      className={classes.bioSection}
      backgroundImage="https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-dark.png"
    >
      <Paper>
        <Container ml={0}>
          <div>
            <Tabs
              color={"orange"}
              orientation="vertical"
              defaultValue={TabName.CURRENT}
              keepMounted
              variant="pills"
            >
              <Tabs.List>
                <Tabs.Tab value={TabName.BIO}>
                  <Text weight={700}>{TabName.BIO}</Text>
                </Tabs.Tab>
                <Tabs.Tab value={TabName.CURRENT}>
                  <Text weight={700}>{TabName.CURRENT}</Text>
                </Tabs.Tab>
                <Tabs.Tab value={TabName.FUTURE}>
                  <Text weight={700}>{TabName.FUTURE}</Text>
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel className={classes.content} value={TabName.BIO}>
                <ScrollArea>
                  <Container>
                    <Stack>
                      <ReactMarkdown>{content?.past}</ReactMarkdown>
                    </Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={classes.content} value={TabName.CURRENT}>
                <ScrollArea>
                  <Container>
                    <Stack>
                      <ReactMarkdown>{content?.present}</ReactMarkdown>
                    </Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={classes.content} value={TabName.FUTURE}>
                <ScrollArea>
                  <Container>
                    <Stack>
                      <ReactMarkdown>{content?.future}</ReactMarkdown>
                    </Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
            </Tabs>
          </div>
        </Container>
      </Paper>
    </Section>
  );
};
