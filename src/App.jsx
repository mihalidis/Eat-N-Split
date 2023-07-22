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
  
  const handleBillPayment = (obj) => {
    let info = ''
    let color = 'black';

    if (obj.whoPayTheBill === 'You' && parseInt(obj.yourExpanse) !== parseInt(obj.friendExpanse)) {
      info = `${selectedUser.name} owes you ${obj.friendExpanse}`;
      color = '#00DFA2';
    } else if (parseInt(obj.yourExpanse) === parseInt(obj.friendExpanse)) {
      info = `You and ${selectedUser.name} are even`;
    } else {
      info = `You owe ${selectedUser.name} ${obj.yourExpanse}`;
      color = '#FF0060';
    }

    const updatedUsers = users.map(user => {
      if (user.id === obj.id) {
        return { ...user, info, color };
      }
      return user;
    });
    setUsers(updatedUsers);
  }

  return (
    <>
      <Users users={users} setUsers={setUsers} selectedUser={selectedUser} setSelectedUser={handleSetSelectedUser} />
      {selectedUser && <CalculateBill selectedUser={selectedUser} handleBillPayment={handleBillPayment} />}
    </>
  )
}

export default App
