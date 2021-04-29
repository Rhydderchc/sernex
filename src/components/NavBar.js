import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../sernex.svg'
import logoMobile from '../sernexMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import {BrowserRouter as Router, Link} from 'react-router-dom';

const styles = makeStyles({
    bar:{
        display:"flex",
        paddingTop: "1.15rem",
        paddingBottom: "1.15rem",
        backgroundColor: "#5cdb95",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "25%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        fontFamily: "Roboto+Condensed",
        textTransform:"uppercase",
        cursor: "pointer", 
        paddingLeft: "1rem",
        paddingRight: "5rem",
        '&:hover':{
            textDecoration: "underline",
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    button: {
        marginLeft: "20rem",
        ['@media (max-width:780px)']: { 
            marginLeft: "-4rem"   }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}></img> 
                <img src={logoMobile} className={classes.logoMobile}/>
                <Typography variant="h7" className={classes.menuItem} >
                <Link onClick={() => {window.location.href="/"}} style={{textDecoration: "none", color: "#05386b"}}>
                    Home
                </Link>   
                </Typography>
                <Typography variant="h7" className={classes.menuItem}>
                <Link onClick={() => {window.location.href="/about"}} style={{textDecoration: "none", color: "#05386b"}}> 
                   About
                </Link>
                </Typography>
                <Typography variant="h7" className={classes.menuItem}>
                <Link onClick={() => {window.location.href="/contact"}}style={{textDecoration: "none", color: "#05386b"}}>
                    Contact Us 
                </Link>
                </Typography>
                <a href="https://github.com/Rhydderchc/sernex" style={{textDecoration: "none"}}>
                <Typography className={classes.button}>
                <CustomBtn txt="Try Our Product"/>
                </Typography>
                </a>
            </Toolbar>
    )
}

export default NavBar