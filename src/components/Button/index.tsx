import React, {ReactNode} from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

interface MagicButtonProps {
  type: string,
  children: ReactNode
}

const Button = styled.a`
	${({ theme }) => css`
		font-size: ${theme.maxWidth};
	`}
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 2rem;
  background: purple;
  color: white;
  border: 2px solid red;

  &:hover {
      opacity: 0.8;
  }
`

const theme = {
	maxWidth: '50px',
}

const MagicButton = ({children, type}: MagicButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button href="/my-page" type={type}>{children} - test</Button>
    </ThemeProvider>
  )
}
// const MagicButton: React.FC = ({ type }: Props) => {
//   return <Button href="/my-page" type={type}>sdgsdg</Button>
// }

export default MagicButton
