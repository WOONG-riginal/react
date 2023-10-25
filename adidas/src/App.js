import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './Home'
import Sale from './routes/Sale'
import Detail from './routes/Detail'

function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Sale" component={Sale} />
        <Route path="/Detail" component={Detail} />
      </HashRouter>
    </div>
  )
}

export default App