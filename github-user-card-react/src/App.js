import React from 'react';

import UserCard from './Components/userCard';
import UserFollowers from './Components/userFollowers';

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/irisjitomo')
    .then(res => res.json())
    .then(res => this.setState({ users : res}))
    .catch(err => console.log("err"));
  }

  render(){
  return (
    <div className="App">
      <h1>Github User Card</h1>
      {/* {console.log(this.state.users)} */}
      <UserCard users={this.state.users}/>
      <UserFollowers />
    </div>
  );
}
}
export default App;
