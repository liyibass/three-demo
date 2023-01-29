import React from 'react'
import { useRoute } from 'wouter'
import * as demos from '../demos'
import ErrorBoundary from './ErrorBoundary'
import Error from './Error'

export const DEFAULT_COMPONENT_NAME = 'Minecraft'

const visibleComponents: any = Object.entries(demos).reduce(
  (acc, [name, item]) => ({ ...acc, [name]: item }),
  {}
)

type Props = {}
const Demo = (props: Props) => {
  const [match, params] = useRoute('/demo/:name')
  const compName = match ? (params.name as string) : DEFAULT_COMPONENT_NAME
  const { Component } = visibleComponents[compName]

  return (
    <>
      <ErrorBoundary key={compName} fallback={(e: any) => <Error>{e}</Error>}>
        <Component />
      </ErrorBoundary>
    </>
  )
}

export default Demo
