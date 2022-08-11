import React from 'react'

import CustomButton from './buttonStyle'

interface ButtonProps {
  title?: string
  onClick: () => void
  sx?: { [key: string]: string }
}

const Button: React.FC<ButtonProps> = ({ title, onClick, sx }) => (
  <CustomButton
    type='button'
    onClick={() => onClick()}
    style={{ ...sx }}
  >
    {title}
  </CustomButton>
)

export default Button
