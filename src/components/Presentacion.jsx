import React from 'react'

export default function Presentacion() {
  return (
    <section className="bg-black bg-cover bg-no-repeat bg-center min-h-119 w-full  flex justify-center relative">

            <div className='w-[90%] xl:w-[80%] flex flex-col items-center md:flex-row md:justify-center'>

            <div className='mt-10 md:mt-6 lg:px-10'>
                <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl text-center md:text-left tracking-tight'>Expande tu negocio aumentando las ventas con rentabilidad</h1>
                <p className='text-lg text-center md:text-left tracking-tight mt-7'>4 años
                    de experiencia en
                    Marketing Digital</p>
                <div className='flex justify-center md:justify-normal mt-7'>
                    <a href="">
                        <button className='bg-[#9028b9] hover:bg-[#3a0250] h-13 w-50 shadow-black shadow-sm text-white rounded-4xl font-semibold text-lg tracking-tight cursor-pointer flex justify-center items-center gap-2'>Contáctanos</button>
                    </a>
                </div>
            </div>
            <img src="img-1.png" className='size-80 lg:size-100 rotate-360' alt="" />

            </div>
        </section>
  )
}
