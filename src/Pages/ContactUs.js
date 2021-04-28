import '../App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
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
        justifyContent: "centre",
        alignItems: "centre",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        textTransform: "uppercase",
        letterSpacing: "0.4rem",
        fontFamily: "Montserrat",
    },
    grid:{
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
    postscript:{
        display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
      textAlign: "justify",
      marginLeft: "20rem",
      marginRight: "20rem",
      letterSpacing:"0.15rem",
      wordSpacing:"0.15rem",
      lineHeight:"2rem"
    }
  })
function ContactUs() {
    const classes = styles();
    return (
        <ThemeProvider theme={theme}>
        <NavBar/>
    <div className={classes.wrapper}></div>
        <Typography variant="h2" className={classes.title}>Contact Us</Typography>
        <Typography variant="h5" className={classes.grid}>
            Here are ways you can contact us in cases of any issue:
            <a href="https://discord.gg/4eSX9XD8Rk">
                Discord
            </a>
        </Typography>
        <div className={classes.littleSpace}></div>
        
        <Typography variant="h5" className={classes.grid}>
            <a href="https://github.com/Rhydderchc/sernex">
                Github
            </a>
        </Typography>
        <div className={classes.littleSpace}></div>
        <Typography variant="h5" className={classes.postscript}>
            <i>Note: Being a small team, we cannot provide support 24/7, but we will make sure that all issues are resolved as quickly as possible</i>
        </Typography>
        <Footer/>
        </ThemeProvider>

    )
}

export default ContactUs;