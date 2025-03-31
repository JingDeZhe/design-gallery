import { createEffect, createSignal, For } from 'solid-js'
import { numberToChinese } from './utils'

export const NumberInput = () => {
  const [value, setValue] = createSignal(0)
  const chineseNumber = () => numberToChinese(value())
  const siblingNumbers = () => {
    const count = 3
    const list = []
    for (let i = 0; i < count; i++) {
      list.push(value() - Math.floor(count / 2) + i)
    }
    return list
  }
  createEffect(() => {
    console.log(`value change: ${value()}`)
  })

  return (
    <div class="gy-number-input">
      <div class="paper-tape-box">
        <div class="paper-tape">
          <For each={siblingNumbers()}>
            {(number) => <div class="paper-tape-number">{number}</div>}
          </For>
        </div>
      </div>
      <div class="chinese-number">{chineseNumber()}</div>
      <div class="controller">
        <div class="controller-btn up" onClick={() => setValue(value() + 1)}>
          <i class="i-tabler:chevron-up"></i>
        </div>
        <div class="controller-btn down">
          <i
            class="i-tabler:chevron-down"
            onClick={() => setValue(value() - 1)}
          ></i>
        </div>
      </div>
    </div>
  )
}
