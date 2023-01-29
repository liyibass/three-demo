import React from 'react'
import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../../images/textures'
import { Mesh, NearestFilter, RepeatWrapping } from 'three'

type Props = {}
const Ground = (props: Props) => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }))

  groundTexture.magFilter = NearestFilter
  groundTexture.wrapS = RepeatWrapping
  groundTexture.wrapT = RepeatWrapping
  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach={'geometry'} args={[100, 100]} />
      <meshStandardMaterial attach={'material'} map={groundTexture} />
    </mesh>
  )
}

export default Ground
