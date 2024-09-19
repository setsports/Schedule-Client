import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const FormSelectMultiple = ({ props }) => {
  const { label, name, setState, options, defaultValue, col, isMulti } = props;

  return (
    <div
      className={`dashboard__form---input dashboard__form---select flex flex-col ${
        col && col
      }`}
    >
      {label && (
        <label
          className='dashboard__form---input-label text-[#212636] pb-2'
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <Select
        name={name}
        id={name}
        required={true}
        onChange={(value) => setState(value)}
        defaultValue={defaultValue}
        options={options}
        isMulti={isMulti ? true : false}
        isSearchable={true}
        components={makeAnimated()}
        styles={{
          control: (styles) => ({
            ...styles,
            border: '1px solid #dcdfe4',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
            height: '2.5rem',
            borderRadius: '0.5rem',
            outline: '#5B4DFB',
            cursor: 'pointer',

            '&:hover': {
              border: '1px solid #5B4DFB',
            },
            '&:focus': {
              border: '1px solid #5B4DFB',
            },
          }),
        }}
        menuPortalTarget={document.body}
      />
    </div>
  );
};

export default FormSelectMultiple;
