import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsersList] = useState([])

  const addUserHandler = (userName, userAge, userId) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: userName, age: userAge, id: userId}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
