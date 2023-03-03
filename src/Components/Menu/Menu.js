import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='menu-main-div-area'>
                        <div className='logo'>School-Project</div>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/class">Class</NavLink></li>
                            <li><NavLink to="/search-student">Search-Student</NavLink></li>
                            <li><NavLink to="/all-students">All-Students</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Menu