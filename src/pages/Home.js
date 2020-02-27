import React from 'react'
import { Link } from 'react-router-dom';
//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {

    return (
        <React.Fragment>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home

