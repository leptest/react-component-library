import React from 'react';
import styled from 'styled-components'

interface Props {
  text: string
}

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 2rem;
  background: green;
  color: white;
  border: 2px solid red;

  &:hover {
      opacity: 0.8;
  }
`

const MagicButton = ({ text }: Props) => {
  return <Button href="/my-page">{text}</Button>
}

export default MagicButton
