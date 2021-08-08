import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#E1F1FF',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 300,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column'
    },
    title: {
        fontSize: 45,
        [theme.breakpoints.down('sm')]: {
            fontSize: 30
        },
    },
    text: {
        color: '#49C98C',
        marginBottom: '-50px',
        marginTop: 40,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '-10px'
        },
    }
}))

const TitleScreen = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Container className={classes.content}>
                <p className={classes.title}>БИЗОНАРИЙ «УСТЬ-БУОТАМА» — РЕСПУБЛИКА САХА (ЯКУТИЯ)</p>
            </Container>
        </Box>
    )
}

export default TitleScreen