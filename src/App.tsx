import { useState } from 'react'
import {
  ClockChild,
  ConditionalMemoClockChild,
  MemoChild,
  MemoChildUpdateParentState,
  MemoChildWithState,
  MemoClockChild,
  NestedClockChild,
  NormalChild,
} from './children'
import { Providers } from './providers'

const color = '#242424'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

const App = () => {
  const [count, setCount] = useState(0)

  console.log('%c👨‍🦳 Parent Render', consoleStyle)

  return (
    <Providers>
      <div className="container">
        <h1>Render Optimisation</h1>
        <p>
          This experiment investigates using memoized components, useMemo and
          context to reduce the number of renders that occur in a React
          component.
        </p>

        <p className="parentState">
          Top level counter: <span className="state">{count}</span>
          <button
            className="increment-button"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment
          </button>
        </p>

        <div className="parentChildren">
          <NormalChild />
          <MemoChild />
          <MemoChildWithState />
          <MemoChildUpdateParentState setCount={setCount} />
          <ClockChild />
          <MemoClockChild />
          <NestedClockChild />
          <ConditionalMemoClockChild />
        </div>
      </div>
    </Providers>
  )
}

export default App
