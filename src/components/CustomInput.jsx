function CustomInput({ value, setValue, emoji, label, type, disabled }) {
  return (
    <>
      <div className="friend-name flex w-full h-[40px] py-[8px] justify-between items-center">
          <label htmlFor="name">{emoji} {label}</label>
          {
            type === 'dropdown' ?
            <select className="form-input w-[224px] h-[24px] focus:outline-none focus:border focus:border-cyan-400 box-border" value={value} onChange={(e) => setValue(e.target.value)}>
              <option value="You">You</option>
              <option value="Sæva">Sæva</option>
            </select> :
            <input disabled={disabled} value={value} onChange={(e) => setValue(e.target.value)} className="form-input focus:outline-none focus:border focus:border-cyan-400 box-border text-center" id="name" type="text" />
          }
      </div>
    </>
  )
}

export default CustomInput