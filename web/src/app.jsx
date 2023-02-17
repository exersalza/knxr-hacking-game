import Game from '@components/game'
import { useState, useEffect } from 'preact/hooks'

export function App() {

  return (
    <div className="grid place-content-center h-screen">
      <Game />
      <div className="top-[50%] left-[50%] absoulute bg-gray-200 h-[8rem] w-[22rem] rounded-[20%] blur-xl -z-10"></div>
    </div>
  )
}
