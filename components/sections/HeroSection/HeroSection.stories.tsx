// HeroSection.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { HeroSection, IProps as HeroSectionProps } from "./HeroSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "HeroSection",
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (
  args: HeroSectionProps
) => <HeroSection {...args}></HeroSection>;

export const Primary = Template.bind({});
Primary.args = {
  title: "Hello, and welcome to my website",
  subtitle:
    "My name is Bill O'Connor. Read on to learn more about me and my work",
};
