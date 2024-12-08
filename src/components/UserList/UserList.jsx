import React, { Component } from 'react';
import UserCard from '../UserCard';

class UserList extends Component {

    render() {
        const { users, toggleFriendStatus } = this.props;
        return (
            <div>
                {users?.map(user => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        gender={user.gender}
                        age={user.age}
                        isFriend={user.isFriend}
                        toggleFriendStatus={toggleFriendStatus}
                    />
                ))}
            </div>
        );
    };
};

export default UserList;