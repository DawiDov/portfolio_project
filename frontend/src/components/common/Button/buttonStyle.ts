import styled from '@emotion/styled'
import { Button } from '@mui/material'

const CustomButton = styled(Button)`
  color: black;
  font-family: style.$font-family;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: #FFFDD0;
  box-shadow: 0 0 10px White;
  border: solid 1px green;
  border-radius: 10px ;
  margin:10px auto 30px auto;
  width: 296px;
  word-spacing: 5px;
  transition-duration: 1000ms;

  &:hover,
  &:active
    box-shadow: inset 0 0 10px #78866b;
    border-color: yellow;
` as typeof Button

export default CustomButton
