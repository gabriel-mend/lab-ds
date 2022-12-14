import { Meta, StoryObj } from '@storybook/react'

import { ButtonProps, Button } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

