import React, {useState, useEffect} from 'react'
import "../styles/contact.scss"
import { Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import GitHub from '@mui/icons-material/GitHub';
import Portrait from '../assets/portrait.png';

export default function Contact() {
    let [name, setName] = useState("Fabio Espinoza")
    //600px change name

    useEffect(()=>{
        if (window.innerWidth <= 928) {
            setName("Fabio")
        }
        window.addEventListener("resize", ()=>{
            if (window.innerWidth <= 928) {
                setName("Fabio")
            } else {
                setName("Fabio Espinoza")
            }
        })
    },[])

    return (

        <section className="contact" id="contact">
            <div className="contactCard">
                {/* Title */}
                <div className="contactInfo">
                    <img src={Portrait} className="contactPhoto"/>
                    <Typography variant="h1" className="contactName">{name}</Typography>
                    <Typography variant="h6" className="contactEmail">E: fasezayt@gmail.com</Typography>
                    <Typography variant="h6" className="contactPhone">T: +1 732-216-7842</Typography>
                </div>
                {/* Socials */}
                <div className="contactSocials">
                    <div>
                        <TwitterIcon />
                        <a href="https://twitter.com/FabioHokage">
                            <Typography variant="subtitle1">Twitter</ Typography>
                        </a>
                    </div>

                    <div>
                        <LinkedInIcon />
                        <a href="https://www.linkedin.com/in/fabio-espinoza-bb616211b/">
                            <Typography variant="subtitle1">LinkedIn</ Typography>
                        </a>
                    </div>

                    <div>
                        <GitHubIcon />
                        <a href="https://github.com/FabioSebs">
                            <Typography variant="subtitle1">GitHub</Typography>
                        </a>
                    </div>
                    <div>
                        <YouTubeIcon />
                        <a href="https://www.youtube.com/channel/UCQyw-ckts9K_ng1fGQvHyoA" >
                            <Typography variant="subtitle1">YouTube</Typography>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
