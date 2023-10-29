import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import TeamMatches from './pages/TeamMatches'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team-matches/:id" component={TeamMatches} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
