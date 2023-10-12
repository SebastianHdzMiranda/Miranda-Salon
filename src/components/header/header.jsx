import { Link } from 'react-router-dom';

// components
import logo from '../../assets/img/logo2.png';
import Navegacion from '../navegacion/navegacion';


const Header = ()=> {

    const enlaces = [
        {titulo: 'Home'},
        {titulo: 'Nosotros'},
        {titulo: 'Servicios'},
        {titulo: 'Productos'},
        {titulo: 'Reservar'},
    ]

    function mostrarNav(e) {
        e.preventDefault();
        // variables
        const nav = document.querySelector('.navegacion');
        const menu  = document.querySelector('#menu');
        const body = document.querySelector('body')


        // condiciones
        if (nav.classList.contains('navegacion--activo')) {
            nav.classList.remove('navegacion--activo');
            menu.classList.remove('is-active');
            body.style.overflowY = 'auto';
        } else{
            nav.classList.add('navegacion--activo');
            menu.classList.add('is-active');
            body.style.overflowY = 'hidden';
        }
    }

    return(<>
        <header className="header">
            <Link to='/' className="header__link">
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
        
            <Link className="header__iconMenu hamburger hamburger--slider" type="button" id="menu" onClick={mostrarNav}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </Link>

            <Navegacion enlaces={enlaces}/>
            
        </header>
    </>);
};

export default Header;