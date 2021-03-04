import React from "react";
import { Story, Meta } from "@storybook/react";
import { Prototype, PrototypeProps } from "..";

export default {
  title: "Prototypes/Searchbar",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Stay = TemplateStory.bind({});
Stay.args = {
  variant: "stay",
};
Stay.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];