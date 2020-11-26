import React from 'react';

function User(props) {
    console.log(props);
    return (
        <div>
            <button
                className='btn'
                onClick={() => props.handleChangeIndex(props.index)}>
                Next &gt;
            </button>
            {/* <p>{props.user.name.first}</p> */}
        </div>
    );
}

export default User;
