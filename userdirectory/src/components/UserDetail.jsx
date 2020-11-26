import React from 'react';

function UserDetail(props) {
    const mappedMovies = props.currentUser.favoriteMovies.map(
        (element, index) => {
            return (
                <div key={element.id}>
                    <span>{index + 1}. </span> <span> {element}</span>
                </div>
            );
        }
    );
    return (
        <div className='user-container'>
            <div className='float'>
                {props.currentIndex + 1} / {props.length}
            </div>
            <h2 className='name'>
                {props.currentUser.name.first} {props.currentUser.name.last}
            </h2>

            <div>
                <p>
                    <strong>From: </strong>
                    {props.currentUser.city}, {props.currentUser.country}
                </p>
                <p>
                    <strong>Title: </strong>
                    {props.currentUser.title}
                </p>
                <p>
                    <strong>Employer: </strong>
                    {props.currentUser.employer}
                </p>
            </div>
            <strong>Favorite Movies:</strong>
            <div className='movies-data'>
                <p>{mappedMovies}</p>
            </div>
        </div>
    );
}

export default UserDetail;
