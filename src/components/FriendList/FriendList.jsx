import React, { Component } from "react";

class FriendList extends Component {
    render() { 
        const { users } = this.props;
        const friendsWithTrue = users.filter((user) => user.isFriend === true)
        return (
            <div>
                <h2>Список друзів</h2>
                <ol>
                    {friendsWithTrue?.map((user) => {
                        return (
                            <li key={user.id}>{user.name} - id: {user.id}</li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

export default FriendList;