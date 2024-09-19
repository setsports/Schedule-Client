import FormAvatar from './FormAvatar';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormSelectMultiple from './FormSelectMultiple';

const CreateForm = ({ title, handleSubmit, children }) => {
  return (
    <form
      className='dashboard__form w-full h-full p-5 rounded-3xl border border-[#02020226] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] bg-white inter'
      onSubmit={(e) => handleSubmit(e)}
    >
      <div
        className={`dashboard__form---grid ${
          children.length > 0 && 'grid lg:grid-cols-2 gap-8'
        }`}
      >
        {children.length > 0
          ? children.map((child) => {
              if (child.props.type) {
                return <FormInput key={child.props.name} props={child.props} />;
              } else if (!child.props.isMulti) {
                return (
                  <FormSelect key={child.props.name} props={child.props} />
                );
              } else if (child.props.options && child.props.isMulti) {
                return (
                  <FormSelectMultiple
                    key={child.props.name}
                    props={child.props}
                  />
                );
              }
            })
          : children}
      </div>
      <button
        type='submit'
        className='dashboard__tab---btn bg-[#5B4DFB] text-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.08)] w-full lg:w-auto p-2 pl-4 pr-4 mt-8'
        to={`${location.pathname}/create`}
      >
        {title}
      </button>
    </form>
  );
};

export default CreateForm;
