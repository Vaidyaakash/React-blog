import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='head__one'>
                <h3>The</h3> <h1>Siren</h1>
            </div>
            <div className='head__two'>
                <ul>
                   <Link to='/home'> <li>Home</li> </Link>
                   <Link to='/tourism'> <li>Tourism</li> </Link>
                   <Link to='/sports'> <li>Sports</li> </Link>
                   <Link to='/technology'> <li>Technology</li> </Link>
                   <Link to='/health'> <li>Health</li> </Link>
                   <Link to='/bollywood'> <li>Bollywood</li> </Link>
                </ul>
            </div>
            <hr />

        </>
    )
}

export default Nav