import Slider from '../Slider/Slider';
import Filter from '../Filters/Filter';
import CountrySelector from '../CountrySelector/CountrySelector';
import Table from '../Table/Table';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ScheduleTable = () => {
  const [dropdownOpened, setDropdownOpened] = useState({
    sports: false,
    channels: false,
  });

  const sports = useSelector((store) => store.sport.sports);
  const channels = useSelector((store) => store.channel.clientChannels);

  return (
    <div className='schedule-table w-full'>
      <div className='schedule-table__wrapper'>
        <CountrySelector />
        <Slider />
        <div className='schedule-table__filters mt-5 sm:mt-10 flex gap-5'>
          <Filter
            data={sports}
            title={'Sports'}
            id='sport'
            dropdownOpened={dropdownOpened}
            setDropdownOpened={setDropdownOpened}
          />
          {localStorage.getItem('selectedPlatform') === 'TV' && (
            <Filter
              data={channels}
              title={'Channels'}
              id='channel'
              dropdownOpened={dropdownOpened}
              setDropdownOpened={setDropdownOpened}
            />
          )}
        </div>
        {<Table />}
      </div>
    </div>
  );
};

export default ScheduleTable;
