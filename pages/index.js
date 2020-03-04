import { useContext } from 'react';
//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import { RoomProvider, RoomContext } from '../context';
import Link from 'next/link'
import Head from 'next/head'
// import '../app.css'

const Home = () => {
    const context = useContext(RoomContext)
    return (
        <React.Fragment>
            <Head>
                <title>Beach Hotel</title>
                <meta name="title" content='Beach Hotel'/>
                <meta name="description" content='It is a beach hotel'/>
                <meta property="og:description" content='It is a beach hotel'/>
                <meta property="og:title" content='Beach Hotel'/>
            </Head>
        <RoomProvider>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
                    <Link href="/rooms/">
                        <a className="btn-primary">our rooms</a>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </RoomProvider> 
        </React.Fragment>
    )
}

export default Home

