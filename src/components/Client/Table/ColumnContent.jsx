import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Button = styled.a`
  color: #fdd106;
  border: 1px solid #fdd106;

  &:hover {
    background-color: #fdd106;
    color: black;
  }
`;

const ColumnContent = ({ data }) => {
  const translations = useSelector((store) => store.client.translations);

  const language = localStorage.getItem('language');

  return (
    <div className='sports-table__column-content bg-[rgba(30,30,30,1)]'>
      <div
        className={`sports-table__column-content---sport-details flex items-center justify-between p-3 md:pl-8 md:pr-8 ${localStorage.getItem('selectedPlatform') !== 'APP' && 'flex-row-reverse sm:flex-row'}`}
      >
        <div className='sports-table__column-content---sport-time table-time text-white  sm:text-3xl text-base'>
          {data.time}
        </div>
        <div className='sports-table__column-content---sport-teams flex gap-3 text-white text-sm sm:text-base'>
          <div
            className={`sports-table__column-content---sport-match ${
              language === 'KA' ? 'nsg' : 'inter'
            }`}
          >
            {data.name}
          </div>
        </div>
        <div
          className={`sports-table__column-content---sport-watch ${
            localStorage.getItem('selectedPlatform') !== 'APP'
              ? 'hidden sm:flex'
              : ''
          }`}
        >
          {localStorage.getItem('selectedPlatform') === 'APP' && (
             <Button
          target='_blank'
          href={`https://app.setantasports.com/live/${data.eventId}`}
          className='rounded text-white regular text-sm sm:text-base sm:hidden py-1 px-3 mr-3'
        >
          {translations[language]['Watch']}
        </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColumnContent;
