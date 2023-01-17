import { Container, Paper, ScrollArea, Stack, Tabs } from "@mantine/core";
import React, { useState } from "react";

import styles from "./styles.module.scss";

enum TabName {
  BIO = "Where I've Been",
  CURRENT = "Where I'm At",
  FUTURE = "Where I'm Going",
}

export const BioSection = () => {
  return (
    <section className={styles.BioSection}>
      <Paper>
        <Container>
          <div>
            <Tabs orientation="vertical" defaultValue={TabName.CURRENT}>
              <Tabs.List>
                <Tabs.Tab value={TabName.BIO}>{TabName.BIO}</Tabs.Tab>
                <Tabs.Tab value={TabName.CURRENT}>{TabName.CURRENT}</Tabs.Tab>
                <Tabs.Tab value={TabName.FUTURE}>{TabName.FUTURE}</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel className={styles.Content} value={TabName.BIO}>
                <ScrollArea>
                  <Container>{"// About.Bio Content"}</Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={styles.Content} value={TabName.CURRENT}>
                <ScrollArea>
                  <Container>
                    <Stack>{"// About.Current.Work Content"}</Stack>
                    <Stack>{"// About.Current.Learn Content"}</Stack>
                  </Container>
                </ScrollArea>
              </Tabs.Panel>
              <Tabs.Panel className={styles.Content} value={TabName.FUTURE}>
                <ScrollArea>
                  <Container>{"// About.Future Content"}</Container>
                </ScrollArea>
              </Tabs.Panel>
            </Tabs>
          </div>
        </Container>
      </Paper>
    </section>
  );
};
