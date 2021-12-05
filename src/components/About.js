import React, { useEffect, useRef } from 'react'
import "../styles/about.scss"
import { init } from "ityped";
import AboutPhoto from "../assets/about.png"

function About() {
    let typyRef = useRef();

    useEffect(() => {
        init(typyRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Student", "Photographer", "Content-Creator"]
        })
    }, [])

    return (

        <section className="about" id="about">
            {/* Photo */}
            <div className="aboutPhoto">
                <img src={AboutPhoto} />
            </div>
            {/* Span !not sure if needed*/}
            <span className="aboutEmpty"></span>
            {/* Description */}
            <div className="aboutDescription">
                <span className="aboutTyper" ref={typyRef}> </span>
                <h1 className="aboutHeader">Fabio Espinoza</h1>
                <h6 className="aboutEssay"> My name is Fabio! Im a motivated programmer and love to make content. I hope to make it big someday and I am very happy to see you on my website :D </h6>
            </div>
        </section>

    )
}

export default About
