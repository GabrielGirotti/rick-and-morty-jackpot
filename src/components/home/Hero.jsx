import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Nav } from './Nav'

export const Hero = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const endPoint = 'https://rickandmortyapi.com/api/character';
    axios.get(endPoint)
      .then(response => {
        const apipData = response.data;
        setCards(apipData.results)
      })
  }, [setCards]);

  //console.log(setCards);



  return (
    <>



      <article className='row'>
        {
          cards.map((el, i) => {
            return (
              <div className='col-12 col-lg-3 col-md-6 ' key={i}>
                <div className="card card__xtra shadow">
                  <img src={`https://rickandmortyapi.com/api/character/avatar/${el.id}.jpeg`} className="card-img-top" alt={el.name} />

                  <div className="card-body">
                    <h3 className="card-title">{el.name}</h3>

                    <Link to={`/details?characterID=${el.id}`} className="btn btn-success"><b>DETAILS</b></Link>
                  </div>
                </div>
              </div>
            )
          })
        }


      </article>
    </>
  )
}
