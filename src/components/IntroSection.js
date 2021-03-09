import React from 'react'
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import {createMuiTheme} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/core"
import {grey} from "@material-ui/core/colors" 


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  const muiTheme = createMuiTheme({
    palette: {
      primary:{
        main: "#dddddd"
      },
      secondary:{
        light: grey[500],
        main: grey[50],
      },

    },
  });

export default function IntroSection() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={muiTheme}>
        <section id="intro" className="intro text-center">   
            <div className="overlay col-sm-12">
                <div className="intro-content">
             
                <h1 className="name">Hi, I'm Betsy Manuel </h1>
                <p class="subtitle">Full Stack Developer</p>
                {/* <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                endIcon={<DeveloperModeOutlinedIcon />}
                 >
                Projects
                </Button>
                <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                endIcon={<DescriptionIcon />}
                 >
               Resume
                </Button>                */}
                <br/>
                    <div className="mt-4">
                    <a className="fa fa-angle-double-down page-scroll" href="#about"></a>
                    {/* <Icon name="" */}
                    </div>
                </div>


            </div>
            
            <div>


            </div>

           
        </section>
        </ThemeProvider>
    )
}
