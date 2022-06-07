import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {

      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const Default = Template.bind({});

Default.args = {
  title: 'Movie Title',
  image:
    'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
};