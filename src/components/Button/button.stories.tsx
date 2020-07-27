import React from 'react'
import Button from './index'
// @ts-ignore
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Button component', decorators: [withKnobs] }
export const button = () => {
    const message = text('Button Text', 'Click here now!')
    return <Button message={message}></Button>
}
