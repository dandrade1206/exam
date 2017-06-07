import React from 'react';

const UserForm = () => {
    return (
        <div className="row">
            <div className="large-12 columns">
                <label>Search Repositories by username</label>
                <input type="text" placeholder="Github username..." />
                <button>Search</button>
                <hr/>
            </div>
        </div>
    )
}
export default UserForm;