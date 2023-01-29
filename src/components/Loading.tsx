import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #dedddf;
  color: white;
`

const LoadingMessage = styled.div`
  font-family: 'Inter', Helvetica, sans-serif;
`

type Props = {}
const Loading = (props: Props) => {
  return (
    <LoadingContainer>
      <LoadingMessage>Loading.</LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading
