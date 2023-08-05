const color = 'green'

const consoleStyle = [
  `background: ${color}`,
  'color: #fff',
  'padding: 1rem',
  'margin: 0',
].join(';')

export const NormalChild = () => {
  console.log('%c🔥 Normal Child Render', consoleStyle)

  return (
    <div
      data-testid="normal-child"
      className="childContainer"
      style={{ backgroundColor: color }}
    >
      <h2>🔥 Normal Child</h2>
      <p>
        This is a normal child component, when the parent state changes, causing
        a re-render, this component will also re-render even though nothing has
        changed.
      </p>
    </div>
  )
}
