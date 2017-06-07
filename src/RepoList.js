import React from 'react';
import styles from './app.css';

const RepoList = () => {
    return (
        <div className="row">
            <h2 className="RepoText">Daniel's Repos</h2>
            <h3 className="RepoText">Filter Repos by primary language</h3>
            <select name="carlist" form="repolist">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="Ruby">Ruby</option>
                <option value="Pascal">Pascal</option>
            </select>
            
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Repo Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a> Pacman </a></td>
                    </tr>
                    <tr>
                        <td><a>Tic tac toe</a></td>
                    </tr>
                    <tr>
                        <td><a>Tetris</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RepoList;