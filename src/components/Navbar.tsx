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


    const handleClick = () => {
        navElements.current.classList.toggle('active')
        navBar.current.classList.toggle('active')
    }

    const handlePage= (e) => {
        setPage(e.target.href)
    }

    return (
        <nav className="nav" ref={navBar}>
            {/* Logo */}
            <img src={Logo} alt="Signature Logo" className="logo"/>
            {/* Hamburger */}
            <a href={page} className="hamburger" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </a>
            {/* Elements */}
            <div className="nav-elements" ref={navElements}>
                <a href="#hero" onClick={handlePage}><span></span> <HomeIcon /> Home</a>
                <a href="#contact" onClick={handlePage}><span></span> <ContactPageIcon /> Contact</a>
                <a href="#about" onClick={handlePage}><span></span> <InfoIcon /> About</a>
                <a href="#projects" onClick={handlePage}><span></span> <GitHubIcon />Projects</a>
            </div>
        </nav>
    )
}
export default Navbar
