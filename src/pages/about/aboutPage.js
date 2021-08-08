import React from 'react'
import { Box } from '@material-ui/core'

import Layout from '../../components/layout/Layout'
import TitleScreen from './components/TitleScreen'
import InfoCard from './components/InfoCard'
import InfoPersonScreen from './components/InfoPersonScreen'
import SliderUsefulLinks from '../../constructor/SliderUsefulLinks'
import VideoScreen from './components/VideoScreen'

const aboutPage = () => {
    return (
        <Layout>
            <TitleScreen />
            <InfoCard />
            <InfoPersonScreen />
            <VideoScreen />
            <SliderUsefulLinks />
        </Layout>
    )
}

export default aboutPage