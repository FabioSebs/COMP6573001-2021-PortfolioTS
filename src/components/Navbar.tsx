import React, { useRef, useState } from 'react'
import Logo from '../assets/logo.png'
import '../styles/navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
    let navElements = useRef()
    let navBar = useRef()
    let [page, setPage] = useState('')
    let hero = document.querySelector('#hero')
    let about = document.querySelector('#about')
    let projects = document.querySelector('#projects')
    let contact = document.querySelector('#contact')


    const handleClick = () => {
        navElements.current.classList.toggle('active')
        navBar.current.classList.toggle('active')
    }

    const handlePage = (e) => {
        setPage(e.target.href)
        e.scrollIntoView()
    }

    return (
        <nav className="nav" ref={navBar}>
            {/* Logo */}
            <img src={Logo} alt="Signature Logo" className="logo" />
            {/* Hamburger */}
            <button className="hamburger" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* Elements */}
            <div className="nav-elements" ref={navElements}>
                <a href="#hero" onClick={() => handlePage(hero)}><span></span> <HomeIcon /> Home</a>
                <a href="#about" onClick={() => handlePage(about)}><span></span> <InfoIcon /> About</a>
                <a href="#projects" onClick={() => handlePage(projects)}><span></span> <GitHubIcon />Projects</a>
                <a href="#contact" onClick={() => handlePage(contact)}><span></span>  <ContactPageIcon /> Contact</a>
            </div>
        </nav>
    )
}
export default Navbar
