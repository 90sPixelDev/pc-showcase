import { Suspense, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { Environment, OrbitControls, AccumulativeShadows, RandomizedLight, PerspectiveCamera } from '@react-three/drei'

const Builder = () => {
  const PC = dynamic(() => import('@/components/canvas/Parts').then((mod) => mod.PC), { ssr: false })
  const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
        <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
    ),
  })
  const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

  const [preset, setPreset] = useState('sunset')

  return (
    <>
      <View className='relative h-full w-full'>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, -5]} />
          <PC scale={2} position={[0, -0.5, 0]} rotation={[0.0, 0.75, 0]} />
          {/* <Common color={'white'} /> */}
          <OrbitControls
            // autoRotate
            // autoRotateSpeed={4}
            enablePan={false}
            // minPolarAngle={Math.PI / 2.1}
            maxPolarAngle={Math.PI / 2.1}
          />
          <Environment preset={preset} background blur={1} />
        </Suspense>
      </View>
    </>
  )
}

export { Builder }
