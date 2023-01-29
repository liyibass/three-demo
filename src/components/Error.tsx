import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  position: absolute;
  padding: 10px 20px;
  bottom: unset;
  right: unset;
  top: 60px;
  left: 60px;
  max-width: 380px;
  border: 2px solid #ff5050;
  color: #ff5050;
`
const Error = ({ children }: React.PropsWithChildren<{}>) => {
  return <StyledError>{children}</StyledError>
}

export default Error
