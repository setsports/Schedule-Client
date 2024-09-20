import styled from 'styled-components';
import CountryList from './CountryList';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

const Popup = styled.div`
  animation: popUp 0.15s linear;

  @keyframes popUp {
    from {
      transform: translate(-50%, -50%) scale(0);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: 1080px) {
    & {
      width: 90%;
    }
  }
`;

const CountryPopup = ({ setIsPopupOpened }) => {
  const language = localStorage.getItem('language');

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        !e.target.closest('.country-popup__wrapper') &&
        e.target.classList.contains('country-popup')
      ) {
        localStorage.getItem('selectedPlatform') === 'APP' &&
        !localStorage.getItem('appCountry')
          ? (localStorage.setItem('selectedPlatform', 'TV'),
            window.location.reload())
          : (setIsPopupOpened(false), (document.body.style.overflow = 'auto'));
      }
    });
  }, []);

  return (
    <div className='country-popup w-full h-screen fixed top-0 left-0 backdrop-blur-3xl z-50'>
      <Popup className='country-popup__wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg overflow-hidden'>
        <div className='country-popup__title regular text-2xl text-white bg-black flex justify-between p-5 items-center'>
          {language === 'EN'
            ? 'SELECT COUNTRY'
            : language === 'RU'
            ? 'Выберите страну'
            : language === 'KA'
            ? 'აირჩიე ქვეყანა'
            : ''}
          <IoClose
            className='text-3xl cursor-pointer'
            onClick={() => {
              localStorage.getItem('selectedPlatform') === 'APP' &&
              !localStorage.getItem('appCountry')
                ? (localStorage.removeItem('selectedPlatform'),
                  window.location.reload())
                : (setIsPopupOpened(false),
                  (document.body.style.overflow = 'auto'));
            }}
          />
        </div>

        <CountryList />
      </Popup>
    </div>
  );
};

export default CountryPopup;
