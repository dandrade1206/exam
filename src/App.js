import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import axios from 'axios';
import styles from './app.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
    state = {
        users: [],
        repos: []
    }

    handleSearchFormSubmit = (searchTerm) => {
        this.setState({
            repos: []
        })


        return axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(({ data }) => {
                const { items: users } = data;
                if (users < 1) {
                    this.setState({
                        users: []
                    })
                    throw new Error('No results');
                }
                this.setState({
                    users: users
                });
            });
    }

        handleUserClick = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
    }
    render() {
      const { repos } = this.props;
        return (
            <div className="App_container">
                <h1>Github Viewer</h1>
                <button className="home">Home</button>
                <hr/>
                  <UserForm onSubmit={this.handleSearchFormSubmit} />
                  <RepoList users={this.state.users} repos={repos}/> 
                  <RepoDetail repos={repos} />
            </div>
        )
    }
}
export default App;
