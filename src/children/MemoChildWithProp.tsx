import React from 'react'

const color = '#B22222'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

const _MemoChildWithProp: React.FC<{ count: number }> = ({ count }) => {
  console.log('%c 🤠 Memo Child With Prop Render', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="memo-child-with-prop"
      style={{ backgroundColor: color }}
    >
      <h2>🤠 Memo Child With Prop Child</h2>
      <p>Parent Count: {count}</p>
      <p>
        This child is wrapped in React.memo and will only render when the parent
        count changes
      </p>
    </div>
  )
}

export const MemoChildWithProp = React.memo(_MemoChildWithProp)
