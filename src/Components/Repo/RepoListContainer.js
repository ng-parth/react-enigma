import React, {Component} from 'react';
import RepoList from './RepoList';
import githubService from "../../Services/GithubService";

class RepoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {repos: null, loading: false};
    }
    componentDidMount() {
        this.getRepos(this.props.username);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.username && this.props.username !== nextProps.username) {
            this.getRepos(nextProps.username);
        } else if (nextProps.username === '') {
            this.setState({repos: null, loading: false})
        }
    }
    getRepos(username) {
        if (username && username.length) {
            this.setState({loading: true});
            githubService.getUserRepos(username).then(resp => {
                if(resp.statusText === 'OK') {
                    this.setState({repos: resp.data, loading: false});
                }
            }).catch(err => {
                console.log(err);
                this.setState({loading: false, repos: null});
            })
        }
    }
    render() {
        return (
            <div>
            {
                this.state.repos && this.state.repos.length &&
                <RepoList repos={this.state.repos}/>
            }
            {
                !this.state.repos &&
                <div>Please  login to see repositories of user.</div>
            }
            {
                this.state.loading &&
                <div className="loader"></div>
            }
            </div>
        )
    }
}

export default RepoListContainer;
