import React from 'react'
import { useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'

type Props = {}
const FPV = (props: Props) => {
  const { camera, gl } = useThree()
  return <PointerLockControls args={[camera, gl.domElement]}></PointerLockControls>
}

export default FPV
