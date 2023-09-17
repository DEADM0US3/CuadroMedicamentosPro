import axios from 'axios'
import { useEffect, useState } from 'react';

function Pantalla(random) {

    console.log(random)
    let random_num = random.random
    const [nombre, setNombre] = useState(null)
    const [imagen,setImagen] = useState(null) 
    const [imagen2, setImagen2] = useState(null)
    const [volteado, setVolteado] = useState(false)

    useEffect(() => { const getPokemon = async () => {

          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${random_num}`
            );
            setNombre(response.data.name);
            setImagen(response.data.sprites.back_default);
            setImagen2(response.data.sprites.front_default);

          } catch (error) {
            console.error("Error en la solicitud", error);
          }
    }   



        getPokemon()

        
    })

    const voltear = () => {
        if (volteado == true){
            setVolteado(false)
        } else {
            setVolteado(true)
        }
    }

    
    return(
        <>
            <p> { (nombre == undefined)? '': nombre.toUpperCase()}</p>
            <img onClick={voltear} src={(volteado == true)? imagen : imagen2}/>
        </>
    )
}

export default Pantalla