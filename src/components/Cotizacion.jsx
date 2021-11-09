import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    font-family: 'Bebas Neue', cursive;
    margin-top: 5rem;
    border: none;
    padding: 10px;
    border-radius: 10px;
    text-align:center;
    color: #FFF; 
    background-color: #483d8b;
    
`;

const InfoPrecioAlto = styled.p`
    font-size: 20px;
    color: #dc143c;
    span {
        color: #00ff00;
        font-weight:bold;
    }
`;
const InfoPrecioBajo = styled.p`
    font-size: 20px;
    color: #ffff00;
    span {
        color: #00ff00;
        font-weight:bold;
    }
`;
const Info24 = styled.p`
    font-size: 18px;
    color: ##f0e68c;
    span {
        color: #00ff00;
        font-weight:bold;
    }
`;
const InfoUltima = styled.p`
    font-size: 18px;
    color: ##f0e68c;
    span {
        color: #00ff00;
        font-weight:bold;
    }
`;

const PrecioT = styled.span`
    font-size: 30px;
    color: #FFF;
    span {
        font-weight:bold;
        color: #00ff00;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return ( 
        <ResultadoDiv>
            <PrecioT>El precio es: <span>{resultado.PRICE}</span> </PrecioT>
            <InfoPrecioAlto>Precio más alto del día: <span>{resultado.HIGHDAY}</span> </InfoPrecioAlto>
            <InfoPrecioBajo>Precio más bajo del día: <span>{resultado.LOWDAY}</span> </InfoPrecioBajo>
            <Info24>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info24>
            <InfoUltima>Última Actualización: <span>{resultado.LASTUPDATE}</span> </InfoUltima>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;