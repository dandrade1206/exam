import React from 'react';
import styles from './app.css';
import { array } from 'prop-types';

const RepoList = (props) => {
    
    const languageDrop = props.repos.map((repo) => {
        return (
                <option key={repo.id}>{repo.language}</option>
        )
    })

    const tableRows = props.repos.map((repo) => {
        return (
            <tr key={repo.id}>
                <td>{repo.name}</td>
            </tr>
        )
    })
    
    
    return (
        <div className="row">
            <h2 className="RepoText">Daniel's Repos</h2>
            <h3 className="RepoText">Filter Repos by primary language</h3>

            <select>
                {languageDrop}
            </select>

            
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Repo Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

RepoList.propTypes = {
    repos: array.isRequired
}

export default RepoList;