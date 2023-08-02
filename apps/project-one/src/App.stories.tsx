import { Meta, StoryObj } from '@storybook/react'

import { App } from './App'

const meta = {
  title: 'Project One/Components/App',
  component: App,
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {} satisfies Story
