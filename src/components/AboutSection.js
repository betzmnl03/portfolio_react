
import skillsImage from "../skillsImage"
import Grid from "@material-ui/core/Grid"
import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";
import { Image } from 'semantic-ui-react'
import ResumeSection from "./ResumeSection"

export default function AboutSection() {
 
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (  
        <>
        <Grid container>
            <Grid item sm={12}>
            <div id="about" style={{
                 paddingTop: "68px",
                 
            }}>
                <p className="title text" >A LITTLE ABOUT ME</p>
                <img className="mypic mb-4" src="./pic2.jpg" alt="mypic" data-aos="fade-in"/>
                <p className="description m-4" >
                    Hi, I’m Betsy — a multidisciplinary and solution-driven Full Stack Developer with 5 years of experience building scalable web applications, backed by 2.5 years in software testing.

                    My background in testing has shaped a strong foundation in writing reliable, high-quality code with a keen eye for detail. I enjoy solving complex, real-world problems and chose web development as my path to create intuitive, impactful solutions that users can genuinely benefit from.

                    I’m particularly driven by the process of turning ideas into functional products and continuously improving performance, usability, and system design.
                </p>
                <p className="description m-4" >When I’m not coding, I enjoy cooking, reading, and spending time with dogs. </p>
            </div>
            <div id="skills" className="skills" style={{
                 paddingTop: "68px",
                 
            }}>
            <p className="title text mt-4"  data-aos="flip-down" >SKILLS</p>

            <Grid container justify="center" >
                <Grid item alignItems="center" sm={6}>
                        <div className="row" data-aos="flip-down" >
                        <Image.Group  size='tiny' className="skill-icon" spaced="right" >
                        {skillsImage.map((skill,i)=>{
                            return(
                                <>
                            <Image src={skill.image} id={skill.title} alt="project_image" className="skill-icon image ml-3 mr-3" label={skill.title}/>
                            
                            </>
                            )
                        })}
                                        
                                    
                        </Image.Group>

                            
                        </div>
            </Grid>
            </Grid>
        </div>
       

        </Grid>
        
        </Grid>

        </>
    )
}
