import '../App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from '../components/NavBar'
import Grid from '../components/Grid'
import Footer from '../components/Footer'
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#05386b",
      },
      secondary: {
        main:"#5cdb95",
      },
      tertiary: {
        main:"#edf5e1",
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
      textAlign: "center",
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })
function Home() {
    const classes = styles();
    return (
        <ThemeProvider theme={theme}>
        <NavBar/>
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.bigSpace} style={{color:theme.palette.tertiary.main, wordSpacing: "0.4rem", letterSpacing: "0.15rem"}}>
         At Sernex.tech, we work on APIs that help!
      </Typography>
      <Typography variant="h5" className={classes.littleSpace} style={{color:theme.palette.tertiary.main, textAlign: "justify", lineHeight:"2.5rem"}}>
        Sernex is a group of small developers who bring you the best of the APIs that you might ever need for you project. We have APIs for Music Lyrics, Space Info, Image Manipulation, all waiting to be used in software built by YOU! So, don't wait, get an API key and start building your application with Sernex.
      </Typography>
    </div>
    <div className={`${classes.grid} ${classes.bigSpace}`}>
      <Grid icon={<SecurityIcon style={{fill: "#05386b", height:"125", width:"125"}}/>}  title="Secure" />
      <Grid icon={<EventNoteIcon style={{fill: "#05386b", height:"125", width:"125"}}/>} title="Reliable" />
      <Grid icon={<TrendingUpIcon style={{fill: "#05386b", height:"125", width:"125"}}/>}  title="Performant" />
    </div>
    <div className={`${classes.grid} ${classes.littleSpace}`}>  
      <Grid icon={<ImportExportIcon style={{fill: "#05386b", height:"125", width:"125"}}/>}  title="Modular" />
      <Grid icon={<ComputerIcon style={{fill: "#05386b", height:"125", width:"125"}}/>}  title="Multi-Platform" />
      <Grid icon={<HttpIcon style={{fill: "#05386b", height:"125", width:"125"}}/>} title="Connected" />
    </div>
    <div className={classes.bigSpace}>
      <Footer/>
    </div>
  </ThemeProvider>
    )
}

export default Home;

