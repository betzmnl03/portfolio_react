
import skillsImage from "../skillsImage"
import Grid from "@material-ui/core/Grid"
import Aos from "aos"
import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css";

export default function AboutSection() {
 
    // const divStyle={
    //     overflowY: 'scroll',
    //     border:'1px solid red',
    //     width:'500px',
    //     float: 'left',
    //     height:'500px',
    //     position:'relative'
    //   };
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (  
        <>
        <Grid container>
            <Grid item sm={12}>
        <div className="techskills" >
             <section className="aboutme" id="about" >
            <div >
                <p className="title text" >A LITTLE ABOUT ME</p>
                <img className="mypic mb-4" src="./pic2.jpg" alt="mypic" data-aos="fade-in"/>
                <p className="description" >Hey! My name is Betsy and I'm a <strong> Web Application Developer</strong> with a passion for full stack development. I'm currently enrolled in a bootcamp. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.</p>
                <p className="description" >When I'm not on the computer, I enjoy cooking, reading and petting dogs. </p>
            </div>
            <div id="skills" className="skills" >
            <p className="title text mt-4"  data-aos="flip-down" >SKILLS</p>

            <div className="row" data-aos="flip-down" style={{overflowX : 'auto',fontSize: '14px'}}>
                {skillsImage.map((skill,i)=>{
                    return(
                    <div className="col-xs-2 col-sm-2 col-md-2 skill-icon img-fluid">
                        <img className="img-responsive" src={skill.image} id={skill.title}/>
                        <p>{skill.title}</p>
                    </div>
                    )
                })}
                
            </div>
        </div>
        </section>
        </div>

        </Grid>
        </Grid>
        </>
    )
}
