import UserDashboard from '../components/UserDashboard/UserDashboard';
import React from 'react';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>

        {/* Відображення списку користувачів */}

        <h1 className='title-h1'>Карточки користувачів</h1>
        <div>
          <h2 className='title-h2'>Картки:</h2>
          <UserDashboard />
        </div>
      </div>
    );
  }
}

export default App;