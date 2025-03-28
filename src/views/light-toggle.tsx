import { createSignal } from 'solid-js'
import classNames from 'classnames'
import './light-toggle.scss'
export const LightToggle = () => {
  const [on, setOn] = createSignal(false)

  return (
    <div
      class={classNames(
        'screen-ctn all-center light-toggle',
        on() ? 'on' : 'off'
      )}
    >
      <div class="toggle idx1"></div>
      <div class="toggle idx2"></div>
    </div>
  )
}
