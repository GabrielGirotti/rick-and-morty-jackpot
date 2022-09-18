import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Details = () => {

    const [charDetalle, setCharDetalle] = useState(null)

    let query = new URLSearchParams(window.location.search);

    let charID = query.get('characterID');



    useEffect(() => {
        const endPoint = `https://rickandmortyapi.com/api/character/${charID}`

        axios.get(endPoint)
            .then(response => {
                const charData = response.data;
                //console.log(charData)
                setCharDetalle(charData)
            })

    }, [setCharDetalle]);


    return (
        <>

            {charDetalle &&
                <>



                    <div className='detalle__contenedor'>
                        <img src={`https://rickandmortyapi.com/api/character/avatar/${charDetalle.id}.jpeg`} alt={charDetalle.name} className='detalle__poster' />
                        <div className='detalle__desc'>
                            <h3>{charDetalle.name}</h3> <br />

                            <div className='detail__info'>
                                <h5>Species:</h5>
                                <p className='detail__info-g'>{charDetalle.species}</p>
                            </div>

                            <div className='detail__info'>
                                <h5>Gender:</h5>
                                <p className='detail__info-g'>{charDetalle.gender}</p>
                            </div>

                            <div className='detail__info'>
                                <h5>Origin:</h5>
                                <p className='detail__info-g'>{charDetalle.origin.name}</p>
                            </div>

                            <div className='detail__info'>
                                <h5>Location:</h5>
                                <p className='detail__info-g'>{charDetalle.location.name}</p>
                            </div>


                        </div>

                    </div>




                </>}
        </>
    )
}
