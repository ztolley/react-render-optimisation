import { useClockData } from '../hooks'

export const ClockChild = () => {
  const { isAlarmSet, setAlarmOff, setAlarmOn, time } = useClockData()!

  const color = 'darkslategray'

  const consoleStyle = [
    `background: ${color}`,
    'color: #fff',
    'padding: 1rem',
    'margin: 0',
  ].join(';')

  console.log('%c👯 Clock Child Render ‍', consoleStyle)

  const toggleAlarm = () => {
    if (isAlarmSet) {
      setAlarmOff()
    } else {
      setAlarmOn()
    }
  }

  return (
    <div
      className="childContainer"
      data-testid="Clock-Child"
      style={{ backgroundColor: color }}
    >
      <h2>👯 Clock Child </h2>
      <p>This component is not wrapped in a memo and uses a context.</p>
      <p>
        {time.toLocaleTimeString()} - Alarm is {isAlarmSet ? 'on' : 'off'}
      </p>
      <p>
        <button
          className={isAlarmSet ? 'on' : 'off'}
          type="button"
          onClick={toggleAlarm}
        >
          Toggle Alarm
        </button>
      </p>
    </div>
  )
}
