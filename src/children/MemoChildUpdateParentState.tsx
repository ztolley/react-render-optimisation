import React from 'react'

const color = '#483d8b	'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

const _MemoChildUpdateParentState: React.FC<{
  setCount: (setter: (c: number) => number) => void
}> = ({ setCount }) => {
  console.log('%c🏄 Memo Child Update Parent State Render', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="memo-child"
      style={{ backgroundColor: color }}
    >
      <h2>🏄 Memo Child Update Parent State </h2>
      <p>
        This component is wrapped in React.memo and will only render when the
        app starts. It also updates the parent state when clicked and proves
        this will not cause a re-render.
      </p>
      <button onClick={() => setCount((c: number) => c + 1)}>
        Increment Parent Count
      </button>
    </div>
  )
}

export const MemoChildUpdateParentState = React.memo(
  _MemoChildUpdateParentState
)
