import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"
import RickAndMortySVG from '../RickAndMortySVG'
import HamburguerMenu from '../HamburguerMenu'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <nav className="navbar">

            <Link to="/" className="navbar-title">
                <span className="navbar-img">
                    <RickAndMortySVG width={60} color="#292929"/>
                </span>
                <span>Rick&Morty</span>
            </Link>


            <div className="hamburguer-menu_view">
                <HamburguerMenu 
                    setState={setMenu}
                    state={menu}
                />
            </div>


            <ul  className={`navbar-menu ${menu || "navbar-menu__close"}`}>
                <li className="navbar-menu__link">
                    <NavLink to="/character">Personajes</NavLink>
                </li>
                <li className="navbar-menu__link">
                    <NavLink to="/episode">Episodios</NavLink>
                </li>
                <li className="navbar-menu__link">
                    <NavLink to="/location">Locaciones</NavLink>
                </li>
                <li className="navbar-menu__logout">
                    <NavLink to="/login">Salir</NavLink>
                </li>
            </ul>

        </nav>
    )
}
