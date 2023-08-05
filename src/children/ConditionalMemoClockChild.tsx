import { useMemo } from 'react'
import { useClockData } from '../hooks'

const _MemoClockChild = () => {
  const { time } = useClockData()!

  const color = '#db7093'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  console.log('%c🥷 Memo Clock Child Render ‍', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h2>🥷 Memo Clock Child </h2>
      <p>
        This component is wrapped in a conditional memo and uses the clock
        context. Even though it's wrapper in a memo, it will re-render when
        anything in the context changes.
      </p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export const ConditionalMemoClockChild = () => {
  const { time } = useClockData()!

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => <_MemoClockChild />, [time])
}
