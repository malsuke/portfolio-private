import type { Meta, StoryObj } from '@storybook/react'
import Articles from '.'

const meta: Meta<typeof Articles> = {
  component: Articles,
  tags: ['autodocs'], // ここを追加
  argTypes: {
    articles: { control: 'array' },
  },
}

export default meta

export const Default: StoryObj<typeof Articles> = {
  args: {
    articles: [
      {
        title: '記事タイトル2',
        url: 'https://example.com',
        updated: '2021-10-10',
      },
      {
        title: '記事タイトル',
        url: 'https://example.com',
        updated: '2021-10-11',
      },
    ],
  },
}
