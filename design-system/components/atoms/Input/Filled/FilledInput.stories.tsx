import { Meta, StoryObj } from '@storybook/react';
import { FilledInput, FilledInputProps } from './FilledInput';

const meta = {
  title: 'components/modules/FilledInput',
  component: FilledInput,
} as Meta<FilledInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  render: (args) => <FilledInput {...args} />,
  args: {
    des: 'Stay informed about Sopa with our latest releases and founder news.',
    FilledInputList: [
      {
        title: 'Products',
        items: ["Model 000", "Model 001", "Laces", "Masks", "No-show Socks", "Crew Socks", "Gift Cards"],
      },
      {
        title: 'Support',
        items: ["Help Center", "FAQs", "Order", "Order Status", "Returns & Exchanges", "Contact Us"],
      },
      {
        title: 'Everything Else',
        items: ["Community", "Why Sopa", "About", "Discount Program", "Sopa Blog", "Sopa Ambassadors"],
      }
    ],
  },
};
