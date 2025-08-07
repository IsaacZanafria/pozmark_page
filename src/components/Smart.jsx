import React from 'react'

export default function Smart() {
  return (
    <div className='min-h-120 w-full relative flex justify-center'>
    <div className='w-full h-full bg-[url(/fondo-2.jpg)] bg-cover bg-no-repeat bg-center absolute opacity-40'></div>
    <div class="w-full h-full absolute bg-red-600/50"></div>

        <div className='w-full flex flex-row items-center justify-center gap-1'>
            <div className='flex flex-col items-center z-40 text-white gap-2'>
                <h2 className='text-8xl md:text-[175px] lg:text-[240px] xl:text-[300px] font-extrabold'>S</h2>
                <p className='text-xs md:text-base lg:text-lg'>Especifico</p>
            </div>
            <div className='flex flex-col items-center z-40 text-white gap-2'>
                <h2 className='text-8xl md:text-[175px] lg:text-[240px] xl:text-[300px] font-extrabold'>M</h2>
                <p className='text-xs md:text-base lg:text-lg'>Medible</p>
            </div>
            <div className='flex flex-col items-center z-40 text-white gap-2'>
                <h2 className='text-8xl md:text-[175px] lg:text-[240px] xl:text-[300px] font-extrabold'>A</h2>
                <p className='text-xs md:text-base lg:text-lg'>Alcanzable</p>
            </div>
            <div className='flex flex-col items-center z-40 text-white gap-2'>
                <h2 className='text-8xl md:text-[175px] lg:text-[240px] xl:text-[300px] font-extrabold'>R</h2>
                <p className='text-xs md:text-base lg:text-lg'>Relevante</p>
            </div>
            <div className='flex flex-col items-center z-40 text-white gap-2'>
                <h2 className='text-8xl md:text-[175px] lg:text-[240px] xl:text-[300px] font-extrabold'>T</h2>
                <p className='text-xs md:text-base lg:text-lg'>Tiempo</p>
            </div>
        </div>
    </div>
  )
}
