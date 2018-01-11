import React, { Component } from 'react';
import Nav from './Components/Nav';
import RepoListContainer from './Components/Repo/RepoListContainer';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {username: ''};
  }

  updateUser = (username) => {this.setState({username})};

  render() {
      return (
          <div>
              <Nav username={this.state.username} onUserUpdate={this.updateUser}/>
              <RepoListContainer username={this.state.username} />
          </div>
      );
  }
}

export default App;
