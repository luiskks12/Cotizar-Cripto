import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import  axios  from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptoMoneda}) => {

    // State del listado de criptomonedas
    const [ listarCripto, guardarCriptomonedas ] = useState([]);
    const [ error , guardarError ] = useState(false);

    const MONEDAS = [
        //{ codigo: 'USD',nombre: 'USD' },
      //  { codigo: 'MXN',nombre: 'MXN' },
      //  { codigo: 'EUR',nombre: 'EUR' },
      //  { codigo: 'GBP',nombre: 'GBP' },
       // { codigo: 'CAD',nombre: 'CAD' },
        
    ]

    // Utilizar useMoneda
    const [ moneda, SelectMoneda ] = useMoneda('Elige tu moneda', '', MONEDAS);

    // Utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda', '', listarCripto);

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcap?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);


    // Cuando el usuario hace el  submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan llenos
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        // Pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptoMoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

            <SelectMoneda />

            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;