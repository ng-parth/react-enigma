import React, { Component } from 'react';
import RepoList from './RepoList';

class RepoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {repos: []};
    }
    componentDidMount() {
        if (this.props.username && this.props.username.length) {
            this.getRepos(this.props.username);
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('Getting new props:', nextProps);
        if (nextProps.username && this.props.username !== nextProps.username) {
            // this.getRepos(nextProps.username)
            this.setState({repos: nextProps.repos})
        }
    }
    getRepos(username) {
        this.setState({repos: this.props.repos})
    }
    render() {
        return (
            <div>
            {
                this.props.username && this.props.repos.length &&
                    <RepoList repos={this.state.repos} />}
                {/*<div> The user has {this.state.repos.length} repos.</div>*/}
            }
            {
                !this.props.username &&
                <div>Set username</div>
            }
            {
                this.props.username && !this.props.repos.length &&
                <div>Empty repo list.</div>
            }
            </div>

        )
    }
}

export default RepoListContainer;
