import type { Meta, StoryObj } from '@storybook/react'
import Profile from '.'

const meta: Meta<typeof Profile> = {
  component: Profile,
  tags: ['autodocs'], // ここを追加
  argTypes: {
    detail: { control: 'object' },
    sns: { control: 'object' },
  },
}

export default meta

export const Default: StoryObj<typeof Profile> = {
  args: {
    detail: {
      所属: 'Company',
      hobby: 'Reading',
      like: 'TypeScript React',
    },
    sns: {
      github: '1',
      twitter: '2',
    },
  },
}
