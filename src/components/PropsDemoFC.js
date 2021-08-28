import React from 'react'

export default function PropsDemoFC(props) {
  return (
    <div>
      Hello, {props.uname}, you are in {props.city}
      <br />
      {props.children}
    </div>
  )
}
