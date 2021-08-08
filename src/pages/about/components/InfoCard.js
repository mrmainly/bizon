import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    container: {
        paddingBottom: 50
    },
    cardStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        height: 220,
        backgroundColor: '#F2F9FF',
        boxShadow: '1px 2px 7px rgba(0, 0, 0, 0.25)',
        borderRadius: '25px 0px',
        marginTop: 50,
        width: 230,
        marginLeft: 10,
        marginRight: 10
    },
    line: {
        height: 1,
        width: '80%',
        backgroundColor: '#384E6F',
        marginTop: 15,
        marginBottom: 15
    },
    text: {
        textAlign: 'center',
    }
}))

const InfoCard = () => {
    const classes = useStyles()
    const arrayCard = [
        {
            numbers: '500 000',
            description: 'Численность бизонов, содержащихся для коммерческого использования в мире',
        },
        {
            numbers: '250',
            description: 'Численность бизонов, содержащихся для коммерческого использования в якутии',
        },
        {
            numbers: '75милл',
            description: 'первоначально общая численность бизонов составляла',
        },
        {
            numbers: '20 000',
            description: 'сколько бизонов в среднем было в стаде',
        },
    ]
    return (
        <Container className={classes.container}>
            <Grid container>
                {arrayCard.map((item, index) => (
                    <Grid item key={index} style={{ margin: '0 auto' }}>
                        <Box className={classes.cardStyles}>
                            <Typography variant="h3">{item.numbers}</Typography>
                            <Box className={classes.line}></Box>
                            <Typography variant="body2" className={classes.text}>{item.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default InfoCard