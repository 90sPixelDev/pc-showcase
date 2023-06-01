'use client'

import Link from 'next/link'
import { Builder } from '@/components/scenes/Builder'

export default function Page() {
  return (
    <div className='flex h-full w-full flex-row'>
      <div className='h-[100vh] min-w-[70vw] lg:min-w-[80vw]'>
        <Builder />
      </div>

      {/* SIDEBAR AREA */}
      <div className='flex w-full flex-col border-l-2 border-blue-200 bg-gradient-to-b from-white to-blue-100'>
        <div className='flex w-full flex-row justify-between border-b-2 border-blue-300 p-2'>
          <h2 className='text-center'>CONFIGURATION</h2>
          <Link className='' href='/'>
            HOME
          </Link>
        </div>
        <div className='p-4'>
          <ul>
            <ul className='border-b-2 border-blue-300 text-xl'>
              Body
              <li className='pl-4 text-base'>Chassis</li>
            </ul>
            <ul className='border-b-2 border-blue-300 text-xl'>
              Main Components
              <li className='pl-4 text-base'>CPU</li>
              <li className='pl-4 text-base'>GPU</li>
              <li className='pl-4 text-base'>RAM</li>
              <li className='pl-4 text-base'>PSU</li>
            </ul>
            <ul className='border-b-2 border-blue-300 text-xl'>
              Cooling
              <li className='pl-4 text-base'>CPU Cooler</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}
