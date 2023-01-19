// ResourceDetailCard.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  ResourceDetailCard,
  IProps as ResourceDetailCardProps,
} from "./ResourceDetailCard";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ResourceDetailCard",
  component: ResourceDetailCard,
} as ComponentMeta<typeof ResourceDetailCard>;

const Template: ComponentStory<typeof ResourceDetailCard> = (
  args: ResourceDetailCardProps
) => <ResourceDetailCard {...args}></ResourceDetailCard>;

export const Primary = Template.bind({});
Primary.args = {
  resource: {
    title: "Personal Knowledge Graph",
    description:
      "Personal Knowledge Graph is a web app for visualizing, organizing, and integrating knowledge. Pieces of knowledge (blocks) live on their own, as opposed to within a rigid organizational structure, can be organized within a hierarchical topic structure, and can be linked to other blocks to demonstrate the connectedness and progression of knowledge (reference => summary => questions and conclusions => projects and expressions). WIP includes a dashboard with insights about the state of the knowledge, and tools for learning such as spaced repetition and forced recall aids",
    href: "https://personalknowledgegraph.com",
    tags: [],
    id: "",
    image: "",
    type: "project",
  },
};
