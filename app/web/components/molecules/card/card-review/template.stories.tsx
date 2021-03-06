import { Meta, Story } from '@storybook/react';
import { ReviewCardTemplate, ReviewCardTemplateProps } from './template';
import * as utils from './utils';

export default {
  title: 'Molecules/Card',
  component: ReviewCardTemplate,
} as Meta;

const CardStory: Story<ReviewCardTemplateProps> = (args) => (
  <ReviewCardTemplate {...args} />
);

export const Review = CardStory.bind({});
Review.args = {
  ...utils,
  user: 'User',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  commentedDate: 'Month, Year',
};
