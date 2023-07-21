import { useState } from "react"
import CustomInput from "./CustomInput"

function CalculateBill() {
  const [billValue, setBillValue] = useState('');
  const [yourExpanse, setYourExpanse] = useState('');
  const [friendExpanse, setFriendExpanse] = useState('');
  const [whoPayTheBill, setWhoPayTheBill] = useState('');

  return (
    <>
      <div className="calculate-bill flex flex-col gap-y-3 items-end w-full max-w-[500px] bg-teal-50 py-[8px] px-[20px] rounded-[6px]">
        <span className="w-full flex items-center justify-center text-[#0B666A] font-bold">SPLIT A BILL WITH Sævar</span>
        <CustomInput value={billValue} setValue={setBillValue} emoji={'💰'} label={'Bill Value'} />
        <CustomInput value={yourExpanse} setValue={setYourExpanse} emoji={'🧍‍♀️'} label={'Your Expanse'} />
        <CustomInput value={friendExpanse} setValue={setFriendExpanse} emoji={'🧑‍🤝‍🧑'} label={'Sævar Expanse'} />
        <CustomInput value={whoPayTheBill} setValue={setWhoPayTheBill} emoji={'🤑'} label={'Who is paying the bill?'} type={'dropdown'} />
        <button className="user-card__button w-full flex items-center justify-center bg-teal-300 px-[16px] py-[8px] rounded-[6px] h-[30px] text-white font-bold">
            SPLIT A BILL
        </button>
      </div>
    </>
  )
}

export default CalculateBill