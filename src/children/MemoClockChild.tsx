import React from 'react'
import { useClockData } from '../hooks'

const _MemoClockChild = () => {
  const { time } = useClockData()!

  const color = '#48d1cc'
  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  console.log('%c💃 Memo Clock Child Render ‍', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h2>💃 Memo Clock Child </h2>
      <p>
        This component is wrapped in a memo and uses the clock context. It will
        re-render when the time changes but it wont re-render when the parent
        re-renders.
      </p>

      <p>
        Note that the component will re-render when Anything in the context
        changes, even if it's something that the component doesn't use.
      </p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export const MemoClockChild = React.memo(_MemoClockChild)
