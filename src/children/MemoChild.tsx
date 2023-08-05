import React from 'react'

const color = 'deepskyblue'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

const _MemoChild = () => {
  console.log('%c 😸 MemoChild Render', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="memo-child"
      style={{ backgroundColor: color }}
    >
      <h2>😸 Memo Child</h2>
      <p>
        This child is wrapped in React.memo and will only render when the app
        starts
      </p>
    </div>
  )
}

export const MemoChild = React.memo(_MemoChild)
