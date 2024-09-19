import { useSelector } from 'react-redux';
import FilterDropdownItem from './FilterDropdownItem';
import OutsideClickHandler from 'react-outside-click-handler';

const FilterDropdown = ({ id, data, setDropdownOpened }) => {
  const platform = useSelector((store) => store.client.selectedPlatform);

  return (
    <OutsideClickHandler
      onOutsideClick={(e) => {
        if (!e.target.closest('.filter__content')) {
          setDropdownOpened({ [id]: false });
        }
      }}
    >
      <div
        className={`filter-dropdown p-3 lg:p-5 absolute left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 w-[calc(100%-45px)] sm:w-auto mt-3 rounded shadow-lg bg-white border regular ${
          data.length > 1 && id === 'channel'
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5'
            : 'grid grid-cols-2 gap-3 sm:gap-5'
        } animate-[dropdownToUp_.15s_linear] sm:animate-[dropdownToUpDesktop_.15s_linear]`}
      >
        {data.map((data) => {
          if (id === 'sport') {
            if (data.relation.includes(platform)) {
              return (
                <FilterDropdownItem key={data.name} id={id} name={data.name} />
              );
            }
          } else {
            return (
              <FilterDropdownItem key={data.name} id={id} name={data.name} />
            );
          }
        })}
      </div>
    </OutsideClickHandler>
  );
};

export default FilterDropdown;
