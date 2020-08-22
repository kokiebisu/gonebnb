import React from 'react';
import { Box } from 'atoms';
import { CustomButton, CustomProps } from 'molecules/Button';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Design Systems/Button/Menu',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
};

const Template: Story<CustomProps> = (args) => (
  <CustomButton type='menu' {...args} />
);

export const base = Template.bind({});
base.args = {};
