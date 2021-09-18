import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(()=>{
    //     props.history.push("./about")
    // }, 2000)
    return (
      <nav className="ui raised very padded segment">
          <a className="ui teal inverted segment ">Gloria</a>
          <div className="ui right floated header" >
              <button className="ui button" > <Link to ="/">Home</Link></button>

              <button className="ui button" > <NavLink to="/about">About</NavLink></button>

              <button className="ui button" > <NavLink to="/contact">Contact</NavLink></button>

            {/* "href",Link to veya Navlink to kısmına yazdığımız kısım yukarıda URL kısmında yazar. About butonuna tıkladığımızda About sayfasında yazanları getirmek için hem Lİnk to içindeki url hem de path deki url aynı olmalı*/}
          </div>

      </nav>
    )
}

export default withRouter(Navbar) 
