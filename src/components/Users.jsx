import { useState } from "react"
import AddUser from "./AddUser"
import UserCard from "./UserCard"

function Users({users, setUsers, selectedUser, setSelectedUser}) {
  const [addUser, setAddUser] = useState(false);

  return (
    <>
    <div className="users-wrapper w-full max-w-[450px] flex flex-col gap-y-4">
      {
        users.map(user => <UserCard key={user.id} user={user} select={selectedUser && (selectedUser.id === user.id)} setSelectedUser={setSelectedUser} />)
      }
      {addUser && <AddUser setUsers={setUsers} setSelectedUser={setSelectedUser} />}
      <button onClick={() => setAddUser(s => !s)} className="user-card__button w-full max-w-[450px] flex items-center justify-center bg-teal-300 px-[16px] py-[8px] rounded-[6px] h-[30px] text-white font-bold">
          {addUser ? 'CLOSE' : 'ADD USERS'}
      </button>
    </div>
    </>
  )
}

export default Users