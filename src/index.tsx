/* @refresh reload */
import 'virtual:uno.css'
import './index.scss'
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import { LightToggle } from './views/light-toggle'
import { GaudyUi } from './views/gaudy-ui'

const root = document.getElementById('root')

render(
  () => (
    <Router>
      <Route path="/light-toggle" component={LightToggle} />
      <Route path="/gaudy-ui" component={GaudyUi} />
    </Router>
  ),
  root!
)
