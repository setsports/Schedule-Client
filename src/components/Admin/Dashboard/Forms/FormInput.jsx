const FormInput = ({ props }) => {
  const {
    type,
    label,
    name,
    disabled,
    readOnly,
    required,
    defaultValue,
    setState,
    col,
  } = props;

  return (
    <div className={`dashboard__form---input flex flex-col ${col && col}`}>
      {label && (
        <label
          className='dashboard__form---input-label text-[#212636] pb-2'
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoComplete='off'
        className={
          type !== 'file'
            ? 'border border-[#dcdfe4] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-10 rounded-lg pl-3 pr-3 outline-[#5B4DFB]'
            : 'border border-[#dcdfe4] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] pt-1 pb-1 cursor-pointer rounded-lg pl-3 pr-3 outline-[#5B4DFB]'
        }
        onChange={(e) => {
          type !== 'file'
            ? setState(e.target.value)
            : setState(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default FormInput;
