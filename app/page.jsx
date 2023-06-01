'use client'

import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className='flex h-full w-full flex-col flex-wrap items-center bg-gradient-to-b  from-white to-blue-100 md:flex-row'>
        <div className='flex h-full w-full flex-col items-center justify-center p-12 text-center'>
          <p className='w-full uppercase'>Next + React Three Fiber + Tailwind</p>
          <div className='flex h-full flex-col justify-center'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>PC-Showcase</h1>
            <p className='mb-8 text-2xl leading-normal'>
              Put together real pc hardware pieces and get an idea of what your pc will look like!
            </p>
            <Link
              className='mx-auto w-fit cursor-pointer rounded-lg bg-blue-300 px-4 py-2 text-white shadow-md shadow-blue-900 transition-transform [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)] hover:scale-150'
              href='/builder'
            >
              Start Building!
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
