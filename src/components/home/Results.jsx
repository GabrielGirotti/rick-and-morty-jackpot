import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Results = () => {

    let query = new URLSearchParams(window.location.search);

    console.log(query)

    let keyword = query.get('name');

    console.log(keyword);

    const [results, setResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://rickandmortyapi.com/api/character/?name=${keyword}`
        //console.log(endPoint)
        axios.get(endPoint)
            .then(response => {
                const charResults = response.data.results;


                setResults(charResults)
            })

    }, [results]);

    return (
        <div className='row'>
            <h5 className='card__xtra'>Characters named <em><b>{keyword}</b></em></h5>
            {
                results.map((el, i) => {
                    return (
                        <div className='col-12 col-lg-3 col-md-6' key={i}>
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
        </div>
    )
}
