import React from 'react';

const UserList = () => {
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
                    <tr>
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UserList;