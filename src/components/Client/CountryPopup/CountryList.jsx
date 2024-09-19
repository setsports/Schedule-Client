import styled from 'styled-components';
import data from '../../../data/countries.json';
import { useSelector } from 'react-redux';

const Country = styled.div`
  &:hover {
    background-color: rgba(255, 243, 192, 1);
    border-color: rgba(255, 243, 192, 1);
  }
`;

const CountryList = () => {
  const countries = useSelector((store) => store.country.clientCountries);
  const translations = useSelector((store) => store.client.translations);
  const language = localStorage.getItem('language');
  const selectedCountry =
    localStorage.getItem('selectedPlatform') === 'TV'
      ? localStorage.getItem('tvCountry')
      : localStorage.getItem('selectedPlatform') === 'APP'
      ? localStorage.getItem('appCountry')
      : '';

  return (
    <div className='h-full'>
      <div
        className={`country-list p-3 lg:p-5 grid ${
          countries.length !== 1 ? 'grid-cols-2' : 'grid-cols-1'
        } gap-5`}
      >
        {Object.entries(countries).map(([key, value]) => {
          return (
            <Country
              key={key}
              className={`country__list---country border rounded flex items-center p-2 gap-4 regular text-sm lg:p-3 lg:text-base lg:pr-10 cursor-pointer ${
                selectedCountry === value.name &&
                'bg-[rgba(255,243,192,1)] border-[rgba(255,243,192,1)]'
              }`}
              onClick={() => {
                if (localStorage.getItem('selectedPlatform') === 'TV') {
                  selectedCountry === value.name &&
                  selectedCountry !== 'Georgia'
                    ? localStorage.removeItem('tvCountry')
                    : localStorage.setItem('tvCountry', value.name);

                  window.location.reload();
                } else if (localStorage.getItem('selectedPlatform') === 'APP') {
                  localStorage.setItem('appCountry', value.name);
                  window.location.reload();
                }
              }}
            >
              <div className='country__flag w-8 h-8'>
                <img
                  src={
                    import.meta.env.VITE_API_BASE_URI +
                    '/uploads/' +
                    value.picture
                  }
                  alt=''
                />
              </div>
              <div
                className={`country__name ${
                  countries.length !== 1 ? '' : 'pr-40'
                }`}
              >
                {translations[language][value.name]}
              </div>
            </Country>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
