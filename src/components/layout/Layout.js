import React from 'react'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Footer from './Footer'


const useStales = makeStyles(() => ({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        minHeight: 650,
        padding: 40,
        marginTop: 50,
        flexDirection: 'column',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
}))

const Layout = ({ children }) => {
    const classes = useStales()
    return (
        <Box className={classes.wrapperContainer}>
            {children}
            <Footer />
        </Box>
    )
}

export default Layout