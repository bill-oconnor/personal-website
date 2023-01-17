import { Container, Paper, ScrollArea, Stack, Tabs, Text } from "@mantine/core";
import React, { useState } from "react";
import { Content } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import { useStyles } from "./styles";

enum TabName {
  BIO = "Where I've Been",
  CURRENT = "Where I'm At",
  FUTURE = "Where I'm Going",
}

interface BioSectionContent {
  past: { chunks: string[] };
  present: { chunks: string[] };
  future: { chunks: string[] };
}

export type IProps = Content<BioSectionContent>;

export const BioSection = (props: IProps) => {
  const { classes } = useStyles();
  const { content } = props;

  return (
    <Section title="Bio" id="bio" className={classes.bioSection}>
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
                      {content?.past?.chunks?.map((chunk, i) => (
                        <Text key={`past-${i}`}>{chunk}</Text>
                      ))}
                    </Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={classes.content} value={TabName.CURRENT}>
                <ScrollArea>
                  <Container>
                    <Stack>
                      {content?.present?.chunks?.map((chunk, i) => (
                        <Text key={`present-${i}`}>{chunk}</Text>
                      ))}
                    </Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={classes.content} value={TabName.FUTURE}>
                <ScrollArea>
                  <Container>
                    <Stack>
                      {content?.future?.chunks?.map((chunk, i) => (
                        <Text key={`future-${i}`}>{chunk}</Text>
                      ))}
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
