import '../App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
//changes to imports 
const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });
  
  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    title:{
        color:"#edf5e1",
        justifyContent: "centre",
        alignItems: "centre",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        textTransform: "uppercase",
        letterSpacing: "0.4rem",
        fontFamily: "Montserrat",
    },
    grid:{
      color: "#edf5e1",
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
      textAlign: "justify",
      marginLeft: "20rem",
      marginRight: "20rem",
      letterSpacing:"0.2rem",
      wordSpacing:"0.15rem",
      lineHeight:"3rem"

    },
  })
function About() {
    const classes = styles();
    return (
        <ThemeProvider theme={theme}>
        <NavBar/>
    <div className={classes.wrapper}></div>
        <Typography variant="h2" className={classes.title}>About Us</Typography>
        <Typography variant="h5" className={classes.grid}>
            We are a small group of individual creators, programmers, learners and enthusiasts who have built Sernex API server for the easy and efficient transfer of data from servers to users. We facilitate this by offering Lyrics API, Space API, Image API and many more coming on the way. We are undertaking a number of projects to complete this year, so development of this can be a little slow. Thank you for choosing Sernex as the API in your application.
            <br/>
            Sincerely,
            <br/>
            Sernex Team
        </Typography>
        <Footer/>
        </ThemeProvider>

    )
}

export default About;
