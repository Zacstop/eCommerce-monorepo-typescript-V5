import { Meta, StoryObj } from '@storybook/react';
import { OutlineInput, OutlineInputProps } from './OutLineInput';

const meta = {
  title: 'components/modules/OutlineInput',
  component: OutlineInput,
} as Meta<OutlineInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  render: (args) => <OutlineInput {...args} />,
  args: {
    des: 'Stay informed about Sopa with our latest releases and founder news.',
  },
};
