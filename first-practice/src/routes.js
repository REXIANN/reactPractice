import { Route } from 'react-router'
import App from './App'
import ibtchart from './IbtChart'

const routes = (
  <Route path="/" component={App}>
    <Route path="/ibtchart" component={ibtchart} />
  </Route>
)

export default routes