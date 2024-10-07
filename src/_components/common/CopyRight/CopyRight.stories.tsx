import type { Meta, StoryObj } from '@storybook/react'
import CopyRight from '.'

const meta: Meta<typeof CopyRight> = {
  component: CopyRight,
  tags: ['autodocs'], // ここを追加
  argTypes: {
    year: { control: 'text' },
    name: { control: 'text' },
  },
}

export default meta

export const Default: StoryObj<typeof CopyRight> = {
  args: {
    year: '2024',
    name: 'Takuzen',
  },
}
