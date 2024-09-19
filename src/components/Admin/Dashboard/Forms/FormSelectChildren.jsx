const FormSelectChildren = ({ props, children }) => {
  const { label, name, required, disabled, setState, defaultValue } = props;

  return (
    <div className='dashboard__form---input dashboard__form---select flex flex-col'>
      {label && (
        <label
          className='dashboard__form---input-label text-[#212636] pb-2'
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        disabled={disabled}
        required={required}
        className={`border border-[#dcdfe4] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-10 rounded-lg pl-3 pr-3 outline-[#5B4DFB] ${
          !disabled && 'cursor-pointer'
        }`}
        onChange={(e) => setState(e.target.value)}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  );
};

export default FormSelectChildren;
