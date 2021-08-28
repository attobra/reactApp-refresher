import React, {useState} from 'react'

export default function StatedemoFc() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      Counter is: {counter}
    </div>
  )
}
