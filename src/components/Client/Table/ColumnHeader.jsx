import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Sport = styled.div`
  background-color: #fdd106;
`;

const League = styled.div`
  color: #fdd106;
`;

const Button = styled.a`
  color: #fdd106;
  border: 1px solid #fdd106;

  &:hover {
    background-color: #fdd106;
    color: black;
  }
`;

const ColumnHeader = ({ data }) => {
  const selectedPlatform = useSelector(
    (store) => store.client.selectedPlatform
  );
  const language = localStorage.getItem('language');
  const translations = useSelector((store) => store.client.translations);

  return (
    <div className='sports-table__column-header bg-[rgba(30,30,30,1)] flex justify-between items-center w-auto'>
      <div className='sports-table__column-header---sport-details flex text-[12px] sm:text-base'>
        <Sport className='sports-table__column-header---sport-name regular p-3 md:pl-8 md:pr-8'>
          {translations[language][data.sport]}
        </Sport>
        <League className='sports-table__column-header---sport-league regular p-3 md:pl-3 md:pr-8'>
          {data.league}
        </League>
      </div>
      {selectedPlatform === 'TV' ? (
        <div className='sports-table__column-header---channel pr-3 md:pr-8 flex items-center gap-3'>
          {data.channel.map((channel) => (
            <img
              src={`${import.meta.env.VITE_API_BASE_URI}/uploads/${
                channel.picture
              }`}
              style={{
                height: '30px',
              }}
            />
          ))}
        </div>
      ) : selectedPlatform === 'APP' ? (
        <Button
          target='_blank'
          href={`https://app.setantasports.com/live/${data.eventId}`}
          className='rounded text-white regular text-sm sm:text-base sm:hidden py-1 px-3 mr-3'
        >
          {translations[language]['Watch']}
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default ColumnHeader;
