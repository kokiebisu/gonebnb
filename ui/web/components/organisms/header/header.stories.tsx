import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "@header/header.component";

import shape from "@styles/shape.module.scss";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = TemplateStory.bind({});
landing.args = {
  variant: "landing",
};
landing.argTypes = {
  criteria: {
    control: "boolean",
  },
};

export const white = TemplateStory.bind({});
white.args = {
  variant: "white",
};

export const details = TemplateStory.bind({});
details.args = {
  variant: "details",
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: "homes",
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  variant: "experiences",
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  variant: "onlinehost",
};

export const stay = TemplateStory.bind({});
stay.args = {
  variant: "stay",
};