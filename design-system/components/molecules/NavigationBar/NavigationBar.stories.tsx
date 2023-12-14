import { Meta, StoryObj } from '@storybook/react';
import { NavigationBar, NavigationBarProps } from './NavigationBar';

const meta = {
  title: 'components/modules/NavigationBar',
  component: NavigationBar,
} as Meta<NavigationBarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  render: (args) => <NavigationBar {...args} />,
  args: {
    title: 'Woori Bank',
    // user: {
    //   name: 'kang san',
    // },
    // onLogout: () => console.log('logout'),
    // onLogin: () => console.log('login'),
    // join: () => console.log('join'),
    // menuList: [
    //   {
    //     name: 'home',
    //     link: '/',
    //   },
    //   {
    //     name: 'about',
    //     link: '/about',
    //   },
    //   {
    //     name: 'contact',
    //     link: '/contact',
    //   },
    // ],
    // containerColor: 'var(--Blue-primary, #3e86f5)',
  },
};
