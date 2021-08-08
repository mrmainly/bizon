import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapperContainer: {
        backgroundImage: `url(${"/img/Group375.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 1200,
        marginTop: 180,
        marginBottom: 130,
        [theme.breakpoints.down('sm')]: {
            minHeight: 1000,
        },
        overflow: 'hidden'
    },
    titleStyle: {
        color: 'white',
        marginTop: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 100
        },
    },
    videoBlock: {
        backgroundColor: 'white',
        width: '100%',
        boxShadow: '1px 2px 20px rgba(0, 0, 0, 0.25)',
        marginTop: 50,
        padding: 20
    }
}))

const VideoScreen = () => {
    const classes = useStyles()
    const arrayText = [
        'В 120-ти километрах от Якутска в территории Природного Парка "Ленские Столбы" в долине реки Буотама расположен бизонарий "Усть-Буотамский. Бизоны находятся в вольерах. Здесь же находится большая семья благородных оленей - изюбров.',
        'Бизонарий был открыт в 2006 году в устье реки Буотама. Животных завезли из Канады, так как своих бизонов в Якутии не осталось после столетий охоты на них. Этот питомник — шаг к возрождению исконной для здешних мест фауны.',
        'Он занимает большую территорию — около 100 гектаров, чтобы животные не чувствовали себя подневольными. Лесной бизон, ровесник мамонта — исчезающий вид, занесенный в международную Красную книгу. ',
        'Расселение лесных бизонов в Якутии связано с возрождением бизонов на исторической родине. Именно в Якутии ученые нашли череп древнего бизона, жившего на этой территории 20-30 тысяч лет назад. Якутские бизоны вымерли примерно 5 тысяч лет назад, а те, которые перебрались в Северную Америку, со временем разделились на два подвида: степные и лесные. В настоящее время в Усть-Буотамском бизонарии содержатся 37 бизонов.',
        'При посещении бизонария следует соблюдать несколько простых правил. Во-первых, нужно помнить, что лесные бизоны очень пугливы и способны на непредсказуемую реакцию, поэтому нельзя приводить в питомник собак и совершать какие-либо действия, которые могут встревожить животных.',
        'Нельзя кормить, дразнить или пугать их. Нельзя заходить за барьеры и ограждения, тем более ставить или сажать на них детей. Важно соблюдать тишину. Фотографировать бизонов можно, но только без использования штатива, вспышки и только с разрешения персонала питомника. Нельзя бросать в вольеры предметы, чтобы привлечь внимание бизона.'
    ]
    return (
        <Box className={classes.wrapperContainer}>
            <Container className={classes.container}>

                <Typography variant="h3" className={classes.titleStyle}>О Проекте</Typography>
                <Box className={classes.videoBlock}>
                    {arrayText.map((item, index) => (
                        <Typography style={{ marginTop: 15 }} key={index} variant="h5">{item}</Typography>
                    ))}
                </Box>

            </Container>
        </Box>
    )
}

export default VideoScreen