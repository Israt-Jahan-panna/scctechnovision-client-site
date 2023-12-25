import React from 'react';
import Banner from '../../Compunents/Banner/Banner';
import ClientsSay from '../ClientsSay/ClientsSay';
import Team from '../Team/Team';
import Collaboration from '../Collaboration/Collaboration';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div className="font-OpenSans">
            <Banner></Banner>
            <Collaboration></Collaboration>
            <Features></Features>
            <Team></Team>
            <ClientsSay></ClientsSay>
        </div>
    );
};

export default Home;