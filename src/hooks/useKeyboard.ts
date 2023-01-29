import { useCallback, useEffect, useState } from 'react'

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  })

  const getActionKey = useCallback((keyCode: string): string | undefined => {
    const keyMapping: { [key: string]: string } = {
      KeyW: 'moveForward',
      KeyS: 'moveBackward',
      KeyA: 'moveLeft',
      KeyD: 'moveRight',
      Space: 'jump',
      Digit1: 'dirt',
      Digit2: 'grass',
      Digit3: 'glass',
      Digit4: 'wood',
      Digit5: 'log',
    }

    return keyMapping?.[keyCode]
  }, [])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const actionKey = getActionKey(event.code)
    if (!actionKey) return

    setActions((prevState) => ({ ...prevState, [actionKey]: true }))
  }, [])

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const actionKey = getActionKey(event.code)
    if (!actionKey) return

    setActions((prevState) => ({ ...prevState, [actionKey]: false }))
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return actions
}
