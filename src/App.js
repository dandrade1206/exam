import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import styles from './app.css';

class App extends Component {
    render() {
        return (
            <div className="App_container">
                <h1>Github Viewer</h1>
                <button className="home">Home</button>
                <hr/>
                  <UserForm />
                  <RepoList /> 
                  <RepoDetail />
            </div>
        )
    }
}
export default App;
