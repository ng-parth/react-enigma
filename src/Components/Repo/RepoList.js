import React, { Component } from 'react';

class RepoList extends Component {
    render() {
        return (
            <div> There are {this.props.repos.length} repos</div>
        )
    }
}

export default RepoList;
