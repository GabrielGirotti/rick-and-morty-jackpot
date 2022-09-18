import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {

  const history = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    //console.log(keyword)

    if (keyword.length === 0) {
      swAlert(<h5>Please insert a keyword to search...</h5>)
    } else {
      history(`/results?name=${keyword}`)
      e.currentTarget.keyword.value = "";

    }
  }


  return (
    <form className='d-flex align-items-center' onSubmit={submitHandler}>
      <input className='form-control' type='text' name='keyword' placeholder='Search...' />

      <button type='submit' className='btn btn-search buscador__btn'>Search</button>
    </form>
  )
}
