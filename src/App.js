import './App.css';
import IntroSection from "./components/IntroSection"
import AboutSection from "./components/AboutSection"
import ResumeSection from "./components/ResumeSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import NavigationOther from "./components/NavigationOther"
import Footer from "./components/Footer"
import Grid from "@material-ui/core/Grid"

function App() {


  return (
    <>
    
    <div className="App">
      <div id="content">
        <Grid container direction="column">
          <Grid item>
          <NavigationOther/>
        </Grid>
        <Grid item>
          <IntroSection/>
        </Grid>
        <Grid item>
          <AboutSection/>
        </Grid>
        <Grid item>
          <ResumeSection/>
        </Grid>
        <Grid item>
          <ProjectsSection/>
        </Grid>
        <Grid item>
          <ContactSection/>
        </Grid>
        <Grid item>
          <Footer/>
        </Grid>
        </Grid>
      </div>
    </div>

  </>
  );
}

export default App;
