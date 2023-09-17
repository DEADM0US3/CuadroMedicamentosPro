import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pantalla from './components/Pantalla'

function App() {
  
  const [random, setRandom] = useState(null)

  const randomize = () => {
    setRandom( Math.floor(Math.random() * 700))
    console.log(random)
  }

  return (
    <>
      <div className='pokedex'>
        <div className='pokeIz'>
          <div className='pokeIzq'>
            <div className='grupoIzqTop'>
            <div className='Decoracion'>
              
              <div className='circulo' id='circuloAzul' ></div>
              <div className='circulo' id="circulos"></div>
              <div className='circulo' id="circulos"></div>
              <div className='circulo' id="circulos"></div>
            </div>
            <div className='pokeIzqTop'>
              <div className='pokeIzqTops'>
              </div>
            </div>
            </div>
            <div className='MarcoPan'>
              <div className='Pantalla'>
                <Pantalla random = {random} ></Pantalla>
              </div>
              <button onClick={randomize} className='circulo'></button>
            </div>
          </div>
        </div>
        <div className='pokeDer'>
          <div className='pokeDerTop'>
          </div>
          <div className='pokeDerBottom'>
            <div className='Pantalla' id='PanDer'>
              <p >
                HEIGHT: 
              </p>
              <p>
              WEIGHT:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
