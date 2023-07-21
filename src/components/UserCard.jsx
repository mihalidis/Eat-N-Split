import { useState } from "react"

function UserCard({ user, setSelectedUser, select }) {
  const buttonColor = select ? 'bg-teal-300' : 'bg-teal-200';

  return (
    <>
      <div className="user-card w-full max-w-[450px] flex gap-x-6 bg-teal-50 py-[16px] px-[20px] rounded-[6px]">
        <img className="user-card__image rounded-[50px]" src={user.img} alt="profil-pic" />
        <div className="user-card__info-wrapper w-full flex justify-between items-center">
          <div className="user-card__info flex flex-col items-start">
            <span className="font-bold">{user.name}</span>
            <span>You owe Sævar 20€</span>
          </div>
          <button onClick={() => setSelectedUser(user)} className={`user-card__button w-[95px] flex items-center justify-center ${buttonColor} px-[16px] py-[8px] rounded-[6px] h-[30px] text-white font-bold`}>
            {select ? 'CLOSE' : 'SELECT'}
          </button>
        </div>
      </div>
    </>
  )
}

export default UserCard