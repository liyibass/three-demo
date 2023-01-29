import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './Ground'
import Player from './Player'
import FPV from './FPV'

type Props = {}
const Minecraft = (props: Props) => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 10]} />
      <ambientLight intensity={0.5} />
      <Physics>
        <Ground />
        <Player />
        <FPV />
      </Physics>
    </Canvas>
  )
}

export default Minecraft
