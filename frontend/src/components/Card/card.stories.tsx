import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card image={''} title={''} />;
