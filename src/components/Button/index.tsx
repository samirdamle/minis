import React from 'react'
type Props = {
    message: string
}
const Button = ({ message = 'Hello world' }: Props) => <button>{message}</button>
export default Button
