import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
//Components
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
//Context
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state={
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    // componentDidMount(){}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
            <h3>no such room could be found...</h3>
            <Link to='/rooms' className="btn-primary">
                Back to Rooms
            </Link>
            </div>
        }
        const { name,description,capacity,size,price,extras,breakfast,pets,images } = room
        const [mainImg,...defaultImg] = images
        return (
            <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                { defaultImg.map((item,index) => {
                   return <img key={index} src={item} alt={name}/>
                }) }
                </div>
                <div className="single-room-info">
                    <article className="description">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: ${size} sqm</h6>
                        <h6>max capacity: {capacity} pax</h6>
                        <h6>{pets?"pets allows":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
