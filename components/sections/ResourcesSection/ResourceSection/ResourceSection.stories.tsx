// ResourceSection.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  ResourceSection,
  IProps as ResourceSectionProps,
} from "./ResourceSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ResourceSection",
  component: ResourceSection,
} as ComponentMeta<typeof ResourceSection>;

const Template: ComponentStory<typeof ResourceSection> = (
  args: ResourceSectionProps
) => <ResourceSection {...args}></ResourceSection>;

export const Primary = Template.bind({});
Primary.args = {
  content: {
    title: "Hello, and welcome to my website",
    subtitle:
      "My name is Bill O'Connor. Read on to learn more about me and my work",
  },
};
