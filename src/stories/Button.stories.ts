// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Official/Example/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'component-red', value: 'DarkRed' },
        { name: 'component-green', value: 'DarkGreen' },
      ],
    },    
  }
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'story-red', value: 'pink' },
      { name: 'story-green', value: 'olive' },
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const BlackOutline = Template.bind({});
BlackOutline.args = {
  label: 'Black Outline Button',
  outline: true,
  outlineColor: 'black',
};

export const GreenOutline = Template.bind({});
GreenOutline.args = {
  label: 'Green Outline Button',
  outline: true,
  outlineColor: 'green',
};
``
