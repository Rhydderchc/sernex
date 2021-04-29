import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignContent: "flex-end",
        alignItems: "centre",
        justifyContent: "centre",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "20px", 
        background: "#05386b",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #edf5e1",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#5cdb95"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn