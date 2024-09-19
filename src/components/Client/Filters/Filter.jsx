import { IoMdArrowDropdown } from 'react-icons/io';
import FilterDropdown from './FilterDropdown';
import { useSelector } from 'react-redux';

const Filter = ({ data, id, title, dropdownOpened, setDropdownOpened }) => {
  const filter = useSelector((store) => store.client.filter);
  const translations = useSelector((store) => store.client.translations);

  const language = localStorage.getItem('language');

  return (
    <div className='filter w-[100%] sm:w-auto'>
      <div
        name=''
        id=''
        className='filter__content h-5 rounded regular items-center lg:gap-12 p-5 pr-2 cursor-pointer bg-white flex justify-between'
        onClick={() => {
          setDropdownOpened({ [id]: !dropdownOpened[id] });
        }}
      >
        <div className='filter__content---title flex items-center gap-2 text-sm sm:text-base'>
          {translations[language][title]}
          {filter[id].length > 0 && (
            <div className='text-xs bg-[#fdd106] w-5 h-5 rounded-full flex items-center justify-center'>
              {filter[id].length}
            </div>
          )}
        </div>
        <IoMdArrowDropdown
          className={`text-3xl ${dropdownOpened[id] && 'rotate-180'}`}
        />
      </div>

      {dropdownOpened[id] && (
        <FilterDropdown
          data={data}
          id={id}
          setDropdownOpened={setDropdownOpened}
        />
      )}
    </div>
  );
};

export default Filter;
