import { useState } from "react"
import Inicio from "./components/Inicio"
import Presentacion from "./components/Presentacion"


function App() {
  const [menu, setMenu] = useState(false)
  function openMenu() {
    setMenu(true)
  }
  function closeMenu() {
    setMenu(false)
  }
  return (
    <>
      <div>
        <nav className='bg-[#610086] w-full h-19 flex justify-between items-center px-5 md:px-12 fixed top-0 z-50 shadow-2xl'>
          <img className='w-20 ml-8 lg:ml-25' src="Posmark - logo blanco.png" alt="logo_posmark" />
          <div className='flex items-center gap-2'>
            <button className='bg-[#610086] hover:bg-[#3a0250] active:bg-[#3a0250] rounded shadow-black shadow-sm cursor-pointer lg:hidden' onClick={openMenu} ><img className="size-9" src="barra-de-menus (1).png" alt="" /></button>

            <a href=""><button className='bg-[#610086] hover:bg-[#3a0250] h-8 w-24 hover:shadow-black hover:shadow-sm text-white rounded-3xl font-medium tracking-tight cursor-pointer hidden lg:block'> Nosotros</button></a>
            <a href=""><button className='bg-[#610086] hover:bg-[#3a0250] h-8 w-24 hover:shadow-black hover:shadow-sm text-white rounded-3xl font-medium tracking-tight cursor-pointer hidden lg:block'>Servicios</button></a>
            <a href=""><button className='bg-[#610086] hover:bg-[#3a0250] h-8 w-39 hover:shadow-black hover:shadow-sm text-white rounded-3xl font-medium tracking-tight cursor-pointer hidden lg:block'>Nuestros trabajos</button></a>
            <a href=""><button className='bg-[#610086] hover:bg-[#3a0250] h-10 w-38 shadow-black shadow-sm text-white rounded-4xl font-medium tracking-tight cursor-pointer hidden lg:flex justify-center items-center gap-2'>Contáctanos<img className="size-5 mt-0.5" src="phone.png" /></button></a>
          </div>
        </nav>
      </div>
      {menu &&
        <div className='fixed inset-0 bg-transparent z-50 '>
          <div className='fixed bg-black/60 right-80 top-0 w-full h-screen' onClick={closeMenu}></div>
          <div className='bg-[#7d279f] h-[100vh] w-80 flex flex-col items-center gap-1 absolute top-0 right-0 '>
            <div className='w-full h-19 bg-[#610086] flex items-center pl-3 '>
              <button className=' text-white w-10 h-10 font-semibold rounded-lg active:shadow-gray-900 shadow-xs hover:bg-[#3a0250] active:bg-[#3a0250] cursor-pointer flex justify-center items-center' onClick={closeMenu}><img src="close.png" className="size-5" /></button>
            </div>
            <a>
              <button className='text-white hover:bg-[#3a0250] active:bg-[#3a0250] w-79 h-12 text-xl font-semibold rounded active:shadow-gray-900 active:shadow-sm cursor-pointer tracking-tight text-start pl-5' onClick={closeMenu}>Nosotros</button>
            </a>
            <a>
              <button className='text-white hover:bg-[#3a0250] active:bg-[#3a0250] w-79 h-12 text-xl font-semibold rounded active:shadow-gray-900 active:shadow-sm cursor-pointer tracking-tight text-start pl-5' onClick={closeMenu}>Servicios</button>
            </a>
            <a>
              <button className='text-white hover:bg-[#3a0250] active:bg-[#3a0250] w-79 h-12 text-xl font-semibold rounded active:shadow-gray-900 active:shadow-sm cursor-pointer tracking-tight text-start pl-5' onClick={closeMenu}>Nuestros Trabajos</button>
            </a>
            <a>
              <button className='text-white bg-[#610086] hover:bg-[#3a0250] active:bg-[#3a0250] w-79 h-12 text-xl font-semibold rounded shadow-gray-900 shadow-sm cursor-pointer tracking-tight text-start pl-5 flex items-center gap-3' onClick={closeMenu}>Contáctanos<img className="size-5 mt-1.5" src="phone.png" /></button>
            </a>
          </div>
        </div>
      }
      <Inicio/>
      <Presentacion/>
      {/* <video className="w-50" controls muted >
        <source src="maqya_1.mp4" type="video/mp4"></source>
      </video> */}
    </>
  )
}

export default App
