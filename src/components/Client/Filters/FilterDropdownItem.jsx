import * as Icon from 'react-icons/fi';
import Checkbox from 'react-custom-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../features/client/clientSlice';

const FilterDropdownItem = ({ id, name }) => {
  const dispatch = useDispatch();

  const filter = useSelector((store) => store.client.filter);
  const translations = useSelector((store) => store.client.translations);

  const language = localStorage.getItem('language');

  return (
    <label className='filter-dropdown__item border rounded flex items-center p-2 gap-3 regular text-sm lg:p-3 lg:text-base lg:pr-10 cursor-pointer'>
      <Checkbox
        borderColor='#fdd106'
        borderRadius='0'
        size={20}
        icon={
          <div
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#fdd106',
              alignSelf: 'stretch',
            }}
          >
            <Icon.FiCheck color='white' size={16} />
          </div>
        }
        checked={filter[id].includes(name)}
        onChange={(value) => {
          dispatch(updateFilter({ filterId: id, value: name, add: value }));
        }}
      />
      {translations[language][name]}
    </label>
  );
};

export default FilterDropdownItem;
