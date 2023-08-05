import { createContext } from 'react'
import { useClockStore } from './clockStore'

export const ClockContext = createContext<ReturnType<
  typeof useClockStore
> | null>(null)
