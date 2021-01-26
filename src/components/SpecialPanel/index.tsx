import React from 'react';
import styled from 'styled-components'

interface Props {
  text: string
}


const Heading = styled.h1`
  font-size: 100px;
  color: indigo;
`

const SpecialPanel = ({ text }: Props) => {
  return <Heading>WOW - {text}</Heading>
}

export default SpecialPanel
