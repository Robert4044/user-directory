import React, { Component } from 'react';
// import UserList from './UserList';
import UserDetail from './UserDetail';
import users from '../data';

class UserContainer extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
            users: users,
        };
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChangeIndex(newIndex) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
    }

    handleChangeIndexPrev = newIndex => {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
    };

    removeItem = index => {
        const users = this.state.users;
        users.splice(index, 1);
        this.setState({ users });
    };

    render() {
        return (
            <div>
                <div className='users'>
                    <UserDetail
                        currentUser={users[this.state.currentIndex]}
                        currentIndex={this.state.currentIndex}
                        length={this.state.users.length}
                    />
                </div>
                <div className='button-container'>
                    <button
                        className='btn'
                        onClick={this.handleChangeIndexPrev}>
                        <i className='far fa-arrow-alt-circle-left fa-3x'></i>
                    </button>
                    {this.state.users.map((item, i) => {
                        return (
                            <button
                                className='btn-delete'
                                key={i}
                                onClick={() => this.removeItem(i)}>
                                Delete
                            </button>
                        );
                    })}

                    <button className='btn' onClick={this.handleChangeIndex}>
                        <i className='far fa-arrow-alt-circle-right fa-3x'></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default UserContainer;
