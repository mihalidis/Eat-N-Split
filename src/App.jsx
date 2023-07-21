import { useState } from 'react'
import './App.css'
import CalculateBill from './components/CalculateBill'
import Users from './components/Users'

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleSetSelectedUser(user) {
    if (selectedUser && (selectedUser.id === user.id)) {
      setSelectedUser(null)
    } else {
      setSelectedUser(user);
    }
  }

  return (
    <>
      <Users users={users} setUsers={setUsers} selectedUser={selectedUser} setSelectedUser={handleSetSelectedUser} />
      <CalculateBill selectedUser={selectedUser} />
    </>
  )
}

export default App
