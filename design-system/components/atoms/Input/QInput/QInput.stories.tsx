import { Meta, StoryObj } from '@storybook/react';
import { QInput, QInputProps } from './QInput';

const meta = {
  title: 'components/modules/QInput',
  component: QInput,
} as Meta<QInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <QInput {...args} />,
  args: {
    placeholder: 'Order Number',
  },
};
