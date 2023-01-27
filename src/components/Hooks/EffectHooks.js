import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const EffectHooks = () => {
    const [initialState,setInitialState] = useState("i am state")

  return (
    <div>{initialState}</div>
  )
}

export default EffectHooks