import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Above65 from './components/Above65'
import OnlineLabs from './components/OnlineLabs'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/above65" component={Above65} />
      <Route exact path="/OnlineLabs" component={OnlineLabs} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
