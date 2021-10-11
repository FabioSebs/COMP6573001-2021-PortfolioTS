import React, {useEffect, useRef} from 'react'
import "../styles/about.scss"
import { init } from "ityped";
import AboutPhoto from "../assets/about.png"

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
            {/* Photo */}
            <img src={AboutPhoto} className="aboutPhoto"/>
            {/* Span !not sure if needed*/}
            <span className="aboutEmpty"></span>
            {/* Description */}
            <div className="aboutDescription">
                <span className="aboutTyper" ref={typyRef}> </span>
                <h1 className="aboutHeader">Fabio Espinoza</h1>
                <h6 className="aboutEssay">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores atque error consequatur praesentium natus consectetur, rerum nesciunt minima, reprehenderit fugiat asperiores. Incidunt tempora placeat consequatur illo ipsam explicabo fugit!</h6>
            </div> 
        </section>

    )
}

export default About
