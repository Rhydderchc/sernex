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
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
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
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}></img> 
                <img src={logoMobile} className={classes.logoMobile}/>
                <Typography variant="h6" className={classes.menuItem}>
                <Link onClick={() => {window.location.href="/"}} style={{textDecoration: "none"}}>
                    Home
                </Link>   
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link onClick={() => {window.location.href="/about"}} style={{textDecoration: "none"}}> 
                   About
                </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link onClick={() => {window.location.href="/contact"}}style={{textDecoration: "none"}}>
                    Contact Us 
                </Link>
                </Typography>
                <a href="https://github.com/Rhydderchc/sernex">
                <CustomBtn txt="Try Our Product"/>
                </a>
            </Toolbar>
    )
}

export default NavBar
