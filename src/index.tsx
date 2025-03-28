/* @refresh reload */
import './index.scss'
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import { LightToggle } from './views/light-toggle'

const root = document.getElementById('root')

render(
  () => (
    <Router>
      <Route path="/light-toggle" component={LightToggle} />
    </Router>
  ),
  root!
)
