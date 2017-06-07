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
          <Router> 
            <div className="App_container">
                <h1>Github Viewer</h1>
                <button className="home">Home</button>
                <hr/>
                    <Route path="/" render={(props) => {
                        return <UserForm {...props} onSubmit={this.handleSearchFormSubmit} />
                    
                      }
                    }
                    />
                  
                  <RepoList repos={this.state.repos} repos={repos}/> 
                  <Route path="/repos/:id" render={(props) => {
                        if (this.state.users.length < 1) {
                            return <Redirect to="/" />
                        }
                        return <RepoDetail repos={this.state.repos} />
                    }} />
            </div>
            </Router>
        )
    }
}
export default App;
