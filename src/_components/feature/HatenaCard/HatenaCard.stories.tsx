import type { Meta, StoryObj } from '@storybook/react'
import HatenaCard from '.'

const meta: Meta<typeof HatenaCard> = {
  component: HatenaCard,
  tags: ['autodocs'], // ここを追加
  argTypes: {
    title: { control: 'text' },
    imgUrl: { control: 'text' },
    linkUrl: { control: 'text' },
    date: { control: 'text' },
  },
}

export default meta

export const Default: StoryObj<typeof HatenaCard> = {
  args: {
    title: '【Python】プログラミング初学者にPythonを激推しする理由',
    imgUrl:
      'https://ogimage.blog.st-hatena.com/6801883189067545605/6801883189086034965/1',
    linkUrl: 'https://blog.hatena.ne.jp/',
    date: '2021-10-10',
  },
}
