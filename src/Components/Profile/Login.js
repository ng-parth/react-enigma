import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newUsername: ''};
    }

    updateNewUsername = (e) => {
        this.setState({newUsername: e.target.value});
    };

    login = () => {
        this.props.onFormLogin(this.state.newUsername);
    };

    render() {
        return (
            <div>
                <h3>Enter username to get details</h3>
                <div className="row">
                    <div className="small-6 columns">
                        <input type="text" placeholder="Username" onChange={this.updateNewUsername}/>
                    </div>
                    <div className="small-6 columns">
                        <button className="button primary"
                                onClick={this.login}
                                disabled={!this.state.newUsername.length}>
                            Get user details
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
