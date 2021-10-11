import React, {useState, useEffect} from 'react'
import Portrait from '../assets/portrait.png';
import '../styles/hero.scss'
import { Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Hero() {
    //States
    let [resize, setResize] = useState(true); 
    let [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setWidth(window.innerWidth)
            if (window.innerWidth < 1300) { setResize(true) }
            else { setResize(false) }
            console.log(typeof(width))
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (

        <section className="hero" id="hero">
            <div className="image-container">
                <img src={Portrait} alt="Fabio Portrait" />
            </div>

            <div className="text-container">
                <Typography variant={resize?'h6':'h4'} className="welcomeText"> Hey there,</Typography>
                <Typography variant={resize?'h5': 'h2'} className="welcomeText"> Welcome </Typography>
                <Typography variant={resize?'h4':'h1'} className="welcomeText"> I'm Fabio! </Typography>
                <a href="#about"><ArrowDownwardIcon className="arrowDown"/> </a>
            </div>
        </section>

    )
}

export default Hero
