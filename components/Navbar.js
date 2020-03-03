import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../images/logo.svg';
import { FaAlignRight, FaUserCircle } from 'react-icons/fa';
import { RoomContext } from '../context';

export default class Navbar extends Component {
    static contextType = RoomContext;
    state= {
        isOpen: false
    }
    componentDidMount = () => {
        this.context.updateCredentials(true);
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    adminPanel = () => {
        console.log(this.context.authenticated);
        let { authenticated } = this.context;
        if (authenticated === null) {
        } else if (authenticated) {
            return (
                <button onClick={this.context.logOut}>Log Out</button>
            )
        } else {
            return (
                <Link href="/chat/">
                    <a>Log in</a>
                </Link>
            )
        }
    }
    render() {
        
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link href="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handleToggle}/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/rooms/"><a>Rooms</a></Link>
                        </li>
                    </ul>
                    <div className="admin-panel">
                        <Link href="/chat/">
                            <FaUserCircle className="user-circle" />
                        </Link>
                        {this.adminPanel()}
                    </div>
                </div>
            </nav>
        )
    }
}
