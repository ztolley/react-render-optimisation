import { ClockContext } from './clock/ClockContext'
import { useClockStore } from './clock/clockStore'

// Allways put your store creation and provider in it's own file
// and have it accept children to surround
// the page or section. Even for simple sections
// This stops store renders from cascading
// into the component tree and causing unnecessary renders

const color = '#f4a460'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

export const Providers: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const clockStore = useClockStore()

  // This renders constantly, every time the store changes
  // So keep it lean
  console.log('%c📡 Providers Render', consoleStyle)

  return (
    <ClockContext.Provider value={clockStore}>{children}</ClockContext.Provider>
  )
}
