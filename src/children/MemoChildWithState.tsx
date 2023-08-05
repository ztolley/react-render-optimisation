import React from 'react'
import { useState } from 'react'

const color = '#008b8b'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

const _MemoChildWithState = () => {
  const [childCount, setChildCount] = useState(0)

  console.log('%c🚀 MemoChildWithState Render', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="memo-child"
      style={{ backgroundColor: color }}
    >
      <h2>🚀 Memo Child With State</h2>
      <p>
        This component is wrapped in React.memo and will only render when the
        app starts or it's own state changes. It will not re-render when parent
        state changes.
      </p>
      <p>Child Count: {childCount}</p>
      <button onClick={() => setChildCount((c) => c + 1)}>
        Increment Child Count
      </button>
    </div>
  )
}

export const MemoChildWithState = React.memo(_MemoChildWithState)
