import { useContext } from 'react'
import { ClockContext } from '../providers/clock/ClockContext'

export const useClockData = () => useContext(ClockContext)
