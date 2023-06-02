'use client'

import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

export function PC(props) {
  const { scene } = useGLTF('/computer-_pc_futuristic.glb')
  // const { scene } = useGLTF('/pc_case.glb')

  // To rotate
  // useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
