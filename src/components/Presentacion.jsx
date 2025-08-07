import React from 'react'

export default function Presentacion() {
    return (
        <section className="bg-black bg-cover bg-no-repeat bg-center min-h-98 w-full flex flex-col items-center relative">

            <div className='w-[90%] xl:w-[75%] mt-5 flex flex-col items-center md:flex-row md:justify-center'>

                <div className='mt-10 md:mt-6 lg:px-10'>
                    <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl text-center md:text-left tracking-tight text-white '>FUNDADOR</h1>
                    <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl text-center md:text-left tracking-tight text-white mt-3'>Roberto Zanafria </h1>
                    <p className='text-lg text-center md:text-left tracking-tight mt-7 md:mt-4 not-first-of-type: text-white '>Máster en Administración
                        de Empresas y Marketing
                        Digital</p>
                </div>

                <div className='w-full mt-10 relative flex flex-col items-center'>
                    <div className='w-70 h-80 bg-white rounded-t-full absolute '></div>
                    <img src="Foto.png" className='w-60 h-70 lg:size rotate-360 relative top-3 lg:top-7' alt="" />

                </div>

            </div>
            <div className='w-full h-18 md:h-20 md:mt-3 lg:mt-7 bg-[#e26664] flex justify-center items-center z-20'>
                <p className='w-[90%] text-white tracking-tight font-semibold text-center md:text-lg lg:text-xl'>4 años de experiencia en <span className='font-extrabold'>Marketing Digital</span></p>
            </div>
        </section>
    )
}
