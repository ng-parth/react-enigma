import React, {Component, Fragment} from 'react';

class RepoList extends Component {
    getTableBody = () => {
        let rows = [];
        this.props.repos.map((repo) => {
            rows.push(
                <tr key={repo.id}>
                    <th><a href={repo.html_url} target="_blank"> {repo.name}</a></th>
                    <th className="hide-for-small-only">{repo.description}</th>
                    <th>{repo.fork ? 'Yes' : 'No'}</th>
                    <th>{repo.language}</th>
                    <th>{repo.open_issues}</th>
                </tr>
            )
        });
        return rows;
    };

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="columns">
                        <div className="table-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Repo</th>
                                        <th className="hide-for-small-only">Description</th>
                                        <th>Forked?</th>
                                        <th>Language</th>
                                        <th>#Open issues</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.getTableBody()
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RepoList;
