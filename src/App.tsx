import React from 'react'
import './App.css'
import { Route, Redirect } from 'wouter'
import Demo, { DEFAULT_COMPONENT_NAME } from './components/Demo'
import Loading from './components/Loading'

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loading />}>
        <Route path="/" children={<Redirect to={`/demo/${DEFAULT_COMPONENT_NAME}`} />} />
        <Route path="/demo/:name">
          <Demo />
        </Route>
      </React.Suspense>
    </div>
  )
}

export default App
