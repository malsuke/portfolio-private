import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'], // ここを追加
  argTypes: {
    title: { control: 'text' },
    imgUrl: { control: 'text' },
  },
}

export default meta

export const Default: StoryObj<typeof Header> = {
  args: {
    title: 'Bonyari Ikiru',
    imgUrl: 'https://takuzen.me/images/logo.png',
  },
}
