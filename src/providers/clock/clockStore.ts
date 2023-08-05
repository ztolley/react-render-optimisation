import { useCallback, useState } from 'react'
import { useInterval } from '../../hooks/useInterval'

const color = '#006400'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

export const useClockStore = () => {
  const [time, setTime] = useState(new Date())
  const [isRunning, setIsRunning] = useState(false)
  const [isAlarmSet, setIsAlarmSet] = useState(false)

  // Use a callback to wrap a function that will be
  // exported from the store to avoid re-renders
  // in components that use the store but not
  // changing data
  const toggle = useCallback(
    (message: string) => {
      console.log(`%c🕰 Clock store toggle time: ${message}`, consoleStyle)
      setIsRunning(!isRunning)
    },
    [isRunning]
    // Note that if the function uses state that is affected by the callback
    // it should be added to the dependencies array
  )

  const setAlarmOn = useCallback(() => {
    console.log('%c🕰 Clock store set alarm on', consoleStyle)
    setIsAlarmSet(true)
  }, [])

  const setAlarmOff = useCallback(() => {
    console.log('%c🕰 Clock store set alarm off', consoleStyle)
    setIsAlarmSet(false)
  }, [])

  // Every time state it changed the store will 're-render'
  // that is it will send data to users of the context
  // so only use state when needed, otherwise use refs

  // any functions exported should use useCallback
  console.log('%c🕰 Clock Store Render', consoleStyle)

  useInterval(() => {
    if (!isRunning) return
    setTime(new Date())
  }, 1000)

  return {
    isAlarmSet,
    isRunning,
    setAlarmOff,
    setAlarmOn,
    time,
    toggle,
  }
}
