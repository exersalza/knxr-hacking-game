import Game from '@components/game'
import { useState, useEffect } from 'preact/hooks'

export function App() {
  const [active, setActive] = useState(true);

  return (
    <div className="grid place-content-center h-screen">
      <Game isActive={active}/>
    </div>
  )
}
