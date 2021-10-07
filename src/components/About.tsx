import React, {useRef, useEffect} from 'react'
import "../styles/about.scss"
import { Typography } from '@mui/material';
import { init } from "ityped";

function About() {
    let typyRef = useRef();

    useEffect(()=>{ 
        init(typyRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer", "Student" ,"Photographer", "Content-Creator"]
        })
    }, [])

    return (

        <section className="about" id="about">
            <Typography variant="h1" className="aboutIntro"> <span className="typy" ref={typyRef}></span></Typography>
        </section>

    )
}

export default About
