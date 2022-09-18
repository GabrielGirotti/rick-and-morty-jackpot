import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';



export const Nav = () => {
  return (
    <>


      <header className='navbar navbar-expand-lg'>
        <nav className='container-fluid'>
          <Link to='/'><img src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' className='nav__logo' alt='Logo' /></Link>

          <ul className="navbar-nav">

            <li className="nav-item" >
              <Link to='/jackpot'><button class="glow-on-hover nav__jack" type="button">PLAY JACKPOT!</button></Link>
              <Search />
            </li>

          </ul>
        </nav>
      </header>
    </>
  )
}
