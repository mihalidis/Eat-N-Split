import { useState } from "react"
import CustomInput from "./CustomInput"
import { generateRandomId } from "../helper";

function AddUser({ setUsers }) {
  const [userName, setUserName] = useState('');
  const [imageURL, setImageURL] = useState('https://i.pravatar.cc/49')

  const handleAddUser = () => {
    setUsers(prev => [...prev, {
      id: generateRandomId(5),
      name: userName,
      img: imageURL,
      info: ''
    }]);
  };

  return (
    <>
      <div className="add-user flex flex-col gap-y-3 items-end w-full max-w-[450px] bg-teal-50 py-[8px] px-[20px] rounded-[6px]">
        <CustomInput value={userName} setValue={setUserName} emoji={'🐼'} label={'Friend Name'} />
        <CustomInput value={imageURL} setValue={setImageURL} emoji={'🖼️'} label={'Image URL'} />
        <button onClick={() => handleAddUser()} className="user-card__button w-[95px] flex items-center justify-center bg-teal-300 px-[16px] py-[8px] rounded-[6px] h-[30px] text-white font-bold">
            ADD
        </button>
      </div>
    </>
  )
}

export default AddUser