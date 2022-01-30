import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <section id="nav-bar">
                <nav>
                    <div id="nav-right">
                        <Link className="link" to="/">
                            Search
                        </Link>
                        <Link className="link" to="/saved">
                            Saved
                        </Link>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Nav;
