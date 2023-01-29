import React from 'react'
import { useErrorBoundary } from 'use-error-boundary'

type Props = {
  children: React.ReactNode
  fallback: (error: any) => React.ReactNode
  name?: string
}

const ErrorBoundary = ({ children, fallback, name }: Props): any => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()
  const result = fallback(error)
  return didCatch ? fallback(error) : <ErrorBoundary key={name}>{children}</ErrorBoundary>
}

export default ErrorBoundary
