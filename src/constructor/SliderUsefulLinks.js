import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Slider from 'react-slick'

import CardUsefulLinks from '../components/CardUsefulLinks'

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        height: 'max-content',
        marginBottom: 100,
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
        height: 200,
        borderRadius: 20,
        objectFit: 'cover',
    },
    LinkStyles: {
        color: '#4E649E',
        marginTop: 10,
        alignItems: 'center',
        textDecoration: 'none',
    },
    blueLine: {
        width: 200,
        height: 3,
        backgroundColor: '#9BCFFF',
        margin: '0 auto',
        marginBottom: 100
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    }
}))

const SliderUsefulLinks = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    const array = [
        {
            img: '/img/38.png',

        },
        {
            img: '/img/48.png',

        },
        {
            img: '/img/40.png',
        },
        {
            img: '/img/41.png',

        },
        {
            img: '/img/50.png',

        },
        {
            img: '/img/43.png',

        },
    ]

    return (
        <Box style={{ overflow: 'hidden' }}>
            <Container>
                <Slider {...settings} >
                    {array.map((item, index) => (
                        <Box key={index} >
                            <CardUsefulLinks img={item.img} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default SliderUsefulLinks