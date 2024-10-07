import type { Meta, StoryObj } from '@storybook/react'
import SocialLinks from '.'

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
  argTypes: {
    profiles: {
      control: 'object',
      description: 'User social media profiles',
    },
  },
}

export default meta

// デフォルトのストーリー
export const Default: StoryObj<typeof SocialLinks> = {
  args: {
    profiles: {
      github: 'https://github.com/example',
      twitter: 'https://twitter.com/example',
    },
  },
}
