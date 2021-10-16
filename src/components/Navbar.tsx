import React, {useRef, useState} from 'react'
import Logo from '../assets/logo.png'
import '../styles/navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
    let navElements = useRef()
    let navBar = useRef()
    let [page,setPage] = useState('')
    let hero = document.querySelector('#hero')
    let about = document.querySelector('#about')
    let projects = document.querySelector('#projects')
    let contact = document.querySelector('#contact')


    const handleClick = () => {
        navElements.current.classList.toggle('active')
        navBar.current.classList.toggle('active')
    } 

    const handlePage= (e) => {
        setPage(e.target.href)
        e.scrollIntoView()
    }

    return (
        <nav className="nav" ref={navBar}>
            {/* Logo */}
            <img src={Logo} alt="Signature Logo" className="logo"/>
            {/* Hamburger */}
            <button className="hamburger" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* Elements */}
            <div className="nav-elements" ref={navElements}> 
                <button onClick={() => handlePage(hero)}><span></span> <HomeIcon /> Home</button>
                <button onClick={() => handlePage(about)}><span></span> <InfoIcon /> About</button>
                <button onClick={() => handlePage(projects)}><span></span> <GitHubIcon />Projects</button>
                <button onClick={() => handlePage(contact)}><span></span>  <ContactPageIcon /> Contact</button>
            </div>
        </nav>
    )
}
export default Navbar
