import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar">
                <div>
                    <a className="logo" href="/">Git Profiler</a>
                    <div className="login">Login</div>
                </div>

            </div>
        )
    }
}

export default Nav;