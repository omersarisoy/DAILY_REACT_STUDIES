import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>React Router DOM Class </h1>

            <div className="navbar">

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>

                <a href="/profile">Profile</a>

                {/* Link to ile yaptığımızda sayfa render olmuyor. Bunu forRefresh ile değiştirebiliriz*/}

            </div>

            {}
            
        </div>
    )
}

export default Header
