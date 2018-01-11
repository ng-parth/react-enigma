import React, { Fragment } from 'react';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import Modal from 'react-responsive-modal/lib/css';
import githubService from './../Services/GithubService';
import LoginForm from './Profile/Login';
import UserProfile from './Profile/UserDetails';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            username: this.props.username,
            userDetails: {},
            invalidUsername: false,
            newUsername: '',
            loading: false
        };
    }

    componentDidMount() {
        this.getGithubUserDetails(this.props.username);
    }

    getGithubUserDetails(username) {
        if (username && username.length) {
            this.setState({loading: true, invalidUsername: false});
            githubService.getUserDetails(username).then(resp => {
                if(resp.statusText === 'OK') {
                    this.setState({userDetails: resp.data, username: resp.data.login, invalidUsername: false});
                    this.props.onUserUpdate(username);
                }
                this.setState({loading: false});
            }).catch(err => {
                console.log(err);
                this.setState({invalidUsername: true, loading: false, username});
            })
        }
    }

    openModal = () => { this.setState({openModal: true}); };

    onCloseModal = () => {
        this.setState({openModal: false});
        if (this.state.invalidUsername) {
            this.setState({
                username: '',
                userDetails: {},
                invalidUsername: false,
                newUsername: ''
            });
        }
    };

    logout = () => {
        this.setState({
            openModal: false,
            username: '',
            userDetails: {},
            invalidUsername: false,
            newUsername: '',
            loading: false
        });
        this.props.onUserUpdate('');
    };

    render() {
        return (
            <div className="navbar">
                <a className="logo" href="/">Git Profiler</a>
                <span className="login" onClick={this.openModal}>
                    {
                        this.state.username && this.state.userDetails.id
                        ? <span className="strong">{this.state.username}</span>
                        : 'Login'
                    }
                </span>

                <Modal open={this.state.openModal} onClose={this.onCloseModal} >
                    {
                        !this.state.username && !this.state.loading &&
                        <LoginForm onFormLogin={this.getGithubUserDetails.bind(this)} />
                    }
                    {
                        this.state.username && this.state.invalidUsername &&
                        <Fragment>
                            <LoginForm onFormLogin={this.getGithubUserDetails.bind(this)} />
                            <div className="callout alert">Invalid username. Please try again.</div>
                        </Fragment>
                    }
                    {
                        this.state.username && this.state.userDetails.id && !this.state.loading &&
                        <Fragment>
                            <UserProfile userDetails={this.state.userDetails}/>
                            <hr />
                            <div className="row">
                                <button className="button expanded warning" onClick={this.logout}>Logout</button>
                            </div>
                        </Fragment>
                    }
                    {
                        this.state.loading &&
                        <div className="loader small-centered"></div>
                    }
                </Modal>
            </div>
        )
    }
}

export default Nav;