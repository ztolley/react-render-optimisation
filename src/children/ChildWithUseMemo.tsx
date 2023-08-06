import { useMemo } from 'react'
import { useClockData } from '../hooks'

export const ChildWithUseMemo = () => {
  const { time } = useClockData()!

  const color = '#ADD8E6'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  const timeStr = useMemo(() => {
    console.log('%c😶‍🌫️ Child With useMemo Compute ‍', consoleStyle)
    return time.toLocaleTimeString()
  }, [time])

  console.log('%c😶‍🌫️ Child With useMemo Render ‍', consoleStyle)

  return (
    <div
      className="childContainer"
      data-testid="Use-Memo-Clock-Child"
      style={{ backgroundColor: color, color: '#000' }}
    >
      <h2>😶‍🌫️ UseMemo Child </h2>
      <p>
        This component uses the clock context and will re-render when any
        context item changes but at least only compute the time display string
        when the time changes.
      </p>

      <p>
        Don't get carried away and memoise the output, instead memoise children
        that if it helps.
      </p>

      <p>{timeStr}</p>
    </div>
  )
}
