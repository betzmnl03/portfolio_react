import Grid from "@material-ui/core/Grid"
import { Button,Icon } from 'semantic-ui-react'
import emailjs from 'emailjs-com';
import Aos from "aos"
import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css";

// const ButtonExampleButton = () => <Button>Grab a copy</Button>
export default function ResumeSection() {
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (
            <section>
                <div id="resume" className="resume start mt-4">
                    <div className="resumeoverlay">
                            <div>
                                <div className="resume-content" data-aos="fade-out">
                                    <p className="resumetext" >checkout my résumé!</p>    
                                        <a href="BetsyManuel_Resume.pdf" download="BetsyManuel_Resume.pdf"> 
                                        <Button animated="vertical" inverted >
                                            <Button.Content visible className="download">
                                                Grab a copy
                                            </Button.Content>
                                            <Button.Content hidden color="grey">
                                            <Icon name="download"></Icon>
                                            </Button.Content>
                                        </Button>
                                        
                                        </a> 
                                
                                </div>
                            </div>
                    </div>
                </div>
            </section>

    )
}