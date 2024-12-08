import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
    render() {
        const { id, name, gender, age, isFriend, toggleFriendStatus } = this.props;
        
        return (
            <article className='user-card-container'>
                <div className={`user-card ${gender}`}>
                    <p>Айді користувача: {id}</p>
                    <p>Ім'я: {name ? name.trim() : "Ghoust"}</p>
                    <p>Стать: {gender}</p>
                    <p>Вік: {age}</p>
                    <button className='buttonClick' onClick={() => toggleFriendStatus(id)}>
                        {isFriend ? 'Видалити дурга' : 'Додати друга'}</button>
                </div>
            </article>
        );
    };
};

export default UserCard;