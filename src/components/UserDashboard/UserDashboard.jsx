import React, { Component } from 'react';
import UserList from '../UserList/UserList';
import FriendList from '../FriendList/FriendList';
import Clicker from '../Clicker/Clicker';

class UserDashboard extends Component {
        state = {
            users: [
                { id: 1, name: "Іван", gender: "male", age: 25 },
                { id: 2, name: "Олена", gender: "female", age: 30 },
                { id: 3, name: "Петро", gender: "male", age: 35 },
                { id: 4, name: "Ольга", gender: "female", age: 23 },
                { id: 5, name: "Василь", gender: "male", age: 32 },
                { id: 6, name: "Антоніна", gender: "female", age: 42 },
            ],
            isFriend: false,
        };

    toggleFriendStatus = (userId) => {
        this.setState((prevStatus) => {
            const updatedUsers = prevStatus.users.map((user) =>
                user.id === userId ? {...user, isFriend: !user.isFriend} : user);
            return {users: updatedUsers}
        });
    };

    render() {
        const { users } = this.state;
        
        return (
            <div>
                <h1>Список користувачів</h1>
                <UserList users={users} toggleFriendStatus={this.toggleFriendStatus} />
                <FriendList users={users}/>
                <Clicker />
            </div>
        );
    };
};

export default UserDashboard;