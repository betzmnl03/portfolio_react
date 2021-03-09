import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Button, Header, Image, Modal,Icon } from 'semantic-ui-react'
import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";


const images = [
    {
      src: "projects/e_commerce.png",
      title: 'BM E-Commerce Application',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","MaterialUI","SemanticUI", "PosgreSQL"],
      github:"https://github.com/betzmnl03/e_commerce_app",
      app:""
    },
    {
      src: "projects/pm_tool.png",
      title: 'Project Management Tool',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","MaterialUI","SemanticUI", "PosgreSQL"],
      github:"https://github.com/betzmnl03/pm_tool",
      app:"https://betsys-pm-tool.herokuapp.com/"
    },
    {
      src: "projects/idea_factory.png",
      title: 'IDEA FACTORY',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","MaterialUI","SemanticUI", "PosgreSQL"],
      github:"https://github.com/betzmnl03/ideas_crud",
      app:"https://betsys-idea-factory.herokuapp.com/"
    },
    {
      src: "projects/blog_on_rails.png",
      title: 'BLOG ON RAILS',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["React"],
      github:"https://github.com/betzmnl03/blog_on_rails_2",
      app:""
    },
    {
      src: "projects/team_picker.png",
      title: 'TEAM PICKER',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","MaterialUI","SemanticUI", "PosgreSQL"],
      github:"https://github.com/betzmnl03/e_commerce_app",
      app:""
    },
    {
      src: "projects/hangman.png",
      title: 'HANGMAN',
      width: '30%',
      description:`An E-Commerce app for clothing retailer to sell their product 
      ReactJs front end Client built with  Material Ui, Semantic UI and Bootstrap for front end
      Rails API for Backend`,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","MaterialUI","SemanticUI", "PosgreSQL"],
      github:"https://github.com/betzmnl03/betsys-hangman",
      app:""
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    //   minWidth: ,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        // maxWidth: "100%",
        height: 100,
        
      },
      
      marginLeft: 22.5,
      marginRight: 20,

      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          background:"black",
          opacity: "0.7",
          // color: "whit",
          border: '4px solid white',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
     
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundRepeat: "no-repeat",
      backgroundSize: '100%',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  function exampleReducer(state, action) {
    console.log(action.id)
    switch (action.type) {
      case 'OPEN_MODAL':
        return { open: true, dimmer: action.dimmer, id: action.id}
      case 'CLOSE_MODAL':
        return { open: false }
      default:
        throw new Error()
    }
  }
  
export default function ProjectsSection() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
    id: undefined
  })
  useEffect(() => {
    Aos.init({duration: 500})
}, [])
  const { open, dimmer,id } = state
    const classes = useStyles();
    return (

        <>
      <div id="projects">
        <Grid container style={{
          backgroundColor:"black"
        }}
        justify="center"
        alignItems="center"
       
        >
            <Grid item >
              <Header as="h1" textAlign="center" className="projects_text mt-4" >PROJECTS</Header>
              </Grid>
            
                <div className={classes.root}>
             
               {images.map((image,i) => (
                    
                    <ButtonBase
                    focusRipple
                    key={i}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                    data-aos="flip-up"
                    >
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${image.src})`
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                                <Typography
                                key={image.id}
                                // imageInfo={image}
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                                onClick={() => dispatch({ type: 'OPEN_MODAL', id:i, dimmer:"blurring"}
                                )}
                                >
                                {image.title}
                                <span className={classes.imageMarked} />
                                </Typography>


                    </span>

                    <Modal
                      closeIcon={{ style: { top: '0.8rem', right: '1rem' }, color: 'black', name: 'close'}}
                      dimmer={dimmer}
                      open={open}
                      onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
                      id={id}
                      size="medium"
                      
                     
                    >      
                      {id !== undefined ? 
                      <React.Fragment >
                      <Modal.Header className="mb-4 text-center"  data-aos="flip-up">{images[id].title} </Modal.Header>
                      <Modal.Content 
                      className="mt-2"image>
                        <Image size='xlarge' src={images[id].src} />
                      </Modal.Content>
                      <Modal.Content>
                      <Modal.Description>
                        <Header></Header>
                        <p>{images[id].description}
                        </p>
                        <br/>


                        <p className="techProject text-center">Tech Stack: {images[id].technology.join(", ")}</p>
                      
                      </Modal.Description>

                    </Modal.Content>
                    
                       
                      <Modal.Actions className="text-center">
                      <a href={images[id].github} target="_blank" rel="noreferrer">
                        <Button icon labelPosition='left' color="black">
                          <Icon name="github"/>
                          View Source
                          
                        </Button>
                        </a>
                        {images[id].app.length>0 ? 
                        <a href={images[id].app} target="_blank" rel="noreferrer">
                        <Button icon labelPosition='left' color="black">
                        <Icon name="globe"/>
                          View App
                        </Button>
                        </a>
                        :""}
                      </Modal.Actions>
                      </React.Fragment>
                        :""}
                    </Modal>
                    </ButtonBase>
                  
             
       
      ))
      }
      </div>
        </Grid>
        </div>
        </>
    )
    
}
