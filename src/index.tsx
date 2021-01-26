import * as React from 'react'
import styled from 'styled-components'
import styles from './styles.module.css'

interface Props {
  text: string
}

// interface ButtonProps {
//   primary: boolean
// }

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 2rem;
  background: blue;
  color: white;
  border: 2px solid red;

  &:hover {
      opacity: 0.8;
  }
`

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example ComponentABC: {text}</div>
}

export const MagicButton = ({ text }: Props) => {
  return <Button href="/my-page">{text}</Button>
}
