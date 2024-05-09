import { useState } from 'react'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <Counter cnt={count} onPlus={plus} onMinus={minus} onReset={reset} />
    </>
  )
}

export default App
