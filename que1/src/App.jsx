import { useState } from 'react'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Counter count={count} />
    </>
  )
}

export default App
