import React from 'react';
import { array } from 'prop-types';

const RepoDetail = (props) => {

    const tableRows = props.repos.map((repo) => {
        return (
            <tr key={repo.id}>
                <td>{repo.stargazers_count}</td>
                <td>{repo.forks_count}</td>
                <td>{repo.language}</td>
            </tr>
        )
    })

    return (
        <div className="row">
            <h3 className="RepoText">"Repo Name" Details!</h3>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}
RepoDetail.propTypes = {
    repos: array.isRequired
}
export default RepoDetail;