import type { Meta, StoryObj } from '@storybook/react'
import EduComponent from '.'

const meta: Meta<typeof EduComponent> = {
  component: EduComponent,
  tags: ['autodocs'], // ここを追加
  argTypes: {},
}

export default meta

export const Default: StoryObj<typeof EduComponent> = {
  args: {
    educations: [
      {
        start: '2017-10',
        end: '2021-10',
        name: 'Title',
        desc: 'Description',
      },
      {
        start: '2021-10',
        end: '2024-09',
        name: 'Title',
        desc: 'Description',
      },
    ],
  },
}
