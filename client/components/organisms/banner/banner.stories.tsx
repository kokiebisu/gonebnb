import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Banner } from './banner.component';
import { ContextProvider } from '../../../context/provider';
import { BannerProps } from './props';

export default {
  title: 'Design System/Organisms/Banner',
  component: Banner,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const BannerTemplate: Story<BannerProps> = (args) => <Banner {...args} />;

export const homes = BannerTemplate.bind({});
homes.args = {
  type: 'homes',
};