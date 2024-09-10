// Styles
import './navbar.scss'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  
  // nos indica la posición sobre el eje Y de la pag en la que estamos posicionados
  console.log(window.scrollY)

//Este método escucha el scroll de la pantalla. Cuando se scrollee correrá la función.
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null); // --> función de limpieza, para que no entre en loop.
  }

  console.log(isScrolled)
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="logo"                    
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className="icon"/>
                <span>KID</span>
                <NotificationsIcon className="icon"/>
                <img 
                    src="public\img\pexels-ogproductionz-15647637.jpg" 
                    alt="profile_pic" 
                />
                <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Navbar;