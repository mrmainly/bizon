import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Link, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        height: 'max-content',
        marginTop: 20,
    },
    textBox: {
        padding: '10px 20px 20px 20px',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center'
    },
    imgStyle: {
        height: 220,
        borderRadius: 20,
    },
    LinkStyles: {
        color: '#4E649E',
        marginTop: 10,
        alignItems: 'center',
        textDecoration: 'none',
    },
}))

const CardUsefulLinks = ({ img }) => {
    const classes = useStyles()
    return (
        <Box className={classes.card}>
            <img src={img} className={classes.imgStyle} alt="" />
        </Box>
    )
}

export default CardUsefulLinks