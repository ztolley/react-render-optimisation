import React from 'react'
import { useClockData } from '../hooks'

export const NestedClockChild = () => {
  const color = '#006400'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  // This should only render once, when the component is mounted
  console.log('%c🧑‍🦱 Nested Clock Child Render', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h3>🧑‍🦱 Nested Clock Child</h3>
      <p>
        This component is not wrapped in React.memo and it's child uses context
        data. This component will re-render when the parent does but does not
        re-render when the clock context changes.
      </p>
      <ClockGrandChild />
      <MemoClockGrandChild />
    </div>
  )
}

const ClockGrandChild = () => {
  const { toggle, time } = useClockData()!

  const color = '#556b2f'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  // This should render every time the store changes
  console.log('%c👧 Clock Grand Child Render', consoleStyle)

  return (
    <div
      className="grandChildContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h3>👧 Clock Grand Child</h3>
      <p>
        This grand child component does not use React.memo so it re-renders when
        it's parent does, it also uses clock context time so will re-render when
        that time changes.
      </p>
      <p>{time.toLocaleTimeString()}</p>
      <div>
        <button type="button" onClick={() => toggle('Grand Child')}>
          Toggle Clock
        </button>
      </div>
    </div>
  )
}

const _MemoClockGrandChild = () => {
  const { toggle, time } = useClockData()!

  const color = '#daa520'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  // This should render every time the store changes
  console.log('%c👦 Memo Clock Grand Child Render', consoleStyle)

  return (
    <div
      className="grandChildContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h3>👦 Memo Clock Grand Child</h3>
      <p>
        This grand child component uses React.memo so it wont re-enders when
        it's parent does but does re-render when its clock context time changes
      </p>
      <p>{time.toLocaleTimeString()}</p>
      <div>
        <button type="button" onClick={() => toggle('Grand Child')}>
          Toggle Clock
        </button>
      </div>
    </div>
  )
}

const MemoClockGrandChild = React.memo(_MemoClockGrandChild)
