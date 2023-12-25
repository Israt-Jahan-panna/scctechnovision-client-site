import React from 'react';
import Banner from '../../Compunents/Banner/Banner';
import ClientsSay from '../ClientsSay/ClientsSay';
import Team from '../Team/Team';
import Collaboration from '../Collaboration/Collaboration';

const Home = () => {
    return (
        <div className="font-OpenSans">
            <Banner></Banner>
            <Collaboration></Collaboration>
            <ClientsSay></ClientsSay>
            <Team></Team>
        </div>
    );
};

export default Home;