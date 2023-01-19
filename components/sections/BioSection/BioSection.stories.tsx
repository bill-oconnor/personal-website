// BioSection.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BioSection, IProps as BioSectionProps } from "./BioSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "BioSection",
  component: BioSection,
} as ComponentMeta<typeof BioSection>;

const Template: ComponentStory<typeof BioSection> = (args: BioSectionProps) => (
  <BioSection {...args}></BioSection>
);

export const Primary = Template.bind({});
Primary.args = {
  content: {
    past: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Faucibus nisl tincidunt eget nullam non nisi est. Lectus proin nibh nisl condimentum id. Tellus cras adipiscing enim eu turpis. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Faucibus ornare suspendisse sed nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Aliquam sem et tortor consequat id porta nibh. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Massa tempor nec feugiat nisl.",
    present:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Faucibus nisl tincidunt eget nullam non nisi est. Lectus proin nibh nisl condimentum id. Tellus cras adipiscing enim eu turpis. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Faucibus ornare suspendisse sed nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Aliquam sem et tortor consequat id porta nibh. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Massa tempor nec feugiat nisl. Purus semper eget duis at tellus at. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Tellus id interdum velit laoreet. Dolor sed viverra ipsum nunc aliquet bibendum enim. Platea dictumst quisque sagittis purus. A lacus vestibulum sed arcu non odio euismod. Netus et malesuada fames ac turpis egestas. Pellentesque id nibh tortor id aliquet. Enim eu turpis egestas pretium aenean pharetra. Viverra nibh cras pulvinar mattis nunc sed blandit. Tempor id eu nisl nunc. Adipiscing bibendum est ultricies integer. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Orci porta non pulvinar neque laoreet suspendisse interdum. Venenatis cras sed felis eget velit aliquet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vestibulum lorem sed risus ultricies tristique nulla. Lobortis feugiat vivamus at augue eget arcu dictum.",
    future:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Faucibus nisl tincidunt eget nullam non nisi est. Lectus proin nibh nisl condimentum id. Tellus cras adipiscing enim eu turpis. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Faucibus ornare suspendisse sed nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Aliquam sem et tortor consequat id porta nibh. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Massa tempor nec feugiat nisl.",
  },
};
