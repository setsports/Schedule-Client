import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import CountryPopup from '../CountryPopup/CountryPopup';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlatform } from '../../../features/client/clientSlice';

const CountrySelector = () => {
  const dispatch = useDispatch();

  const translations = useSelector((store) => store.client.translations);

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const language = localStorage.getItem('language');

  return (
    <>
      <div className='country-selector w-full rounded pl-5 lg:pl-10 pr-1 bg-neutral-900 sm:pt-0 pt-3'>
        <div className='country-selector__wrapper flex justify-between'>
          <div className='country-selector__left regular text-white'>
            <div className='country-selector__switcher text-base flex gap-8 h-full'>
              <button
                className={`group country-selector__switcher---button hover:border-b-4 hover:pt-[4px] hover:border-[#fdd106] hover:text-[#fdd106] pb-3 sm:pb-0 ${
                  localStorage.getItem('selectedPlatform') === 'APP' &&
                  'border-b-4 pt-[4px] border-[#fdd106] text-[#fdd106]'
                } group-hover:fill-[#fdd106]`}
                onClick={(e) => {
                  localStorage.setItem('selectedPlatform', 'APP');
                  window.location.reload();
                }}
              >
                <div className='country-selector__switcher---button-wrapper flex items-center gap-2'>
                  <div className='country-selector__switcher---button-icon min-w-[.8rem]'>
                    <svg
                      className={`group-hover:fill-[#fdd106] ${
                        localStorage.getItem('selectedPlatform') === 'APP'
                          ? 'fill-[#fdd106]'
                          : 'fill-white'
                      }`}
                      xmlns='http://www.w3.org/2000/svg'
                      id='Layer_1'
                      viewBox='2.51 2 14 20'
                    >
                      <g xmlns='http://www.w3.org/2000/svg' id='phone'>
                        <g id='Group_14'>
                          <path d='M2.51,2v20h14V2H2.51ZM14.51,20H4.51V4h10v16Z' />
                          <rect
                            id='Rectangle_134'
                            x='7.51'
                            y='17'
                            width='4'
                            height='2'
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className='country-selector__switcher---button-title'>
                    {translations[language]['APP']}
                  </div>
                </div>
              </button>
              <button
                className={`group country-selector__switcher---button hover:border-b-4 hover:pt-[4px] hover:border-[#fdd106] hover:text-[#fdd106] pb-3 sm:pb-0 ${
                  localStorage.getItem('selectedPlatform') === 'TV' &&
                  'border-b-4 pt-[4px] border-[#fdd106] text-[#fdd106]'
                }`}
                onClick={(e) => {
                  // localStorage.removeItem('tvCountry');
                  localStorage.setItem('selectedPlatform', 'TV');
                  window.location.reload();
                }}
              >
                <div className='country-selector__switcher---button-wrapper flex items-center gap-2'>
                  <div className='country-selector__switcher---button-icon min-w-[1.25rem]'>
                    <svg
                      className={`${
                        localStorage.getItem('selectedPlatform') === 'TV'
                          ? 'fill-[#fdd106]'
                          : 'fill-white'
                      } group-hover:fill-[#fdd106]`}
                      xmlns='http://www.w3.org/2000/svg'
                      id='Layer_1'
                      viewBox='72.49 2 24 20'
                    >
                      <g xmlns='http://www.w3.org/2000/svg' id='desktop'>
                        <path
                          id='Union_43'
                          d='M96.49,18h-11v2h4v2h-10v-2h4v-2h-11V2h24v16ZM94.49,4h-20v12h20V4Z'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='country-selector__switcher---button-title'>
                    {translations[language]['TV']}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className='country-selector__right hidden sm:block'>
            <div
              name=''
              id=''
              className='h-12 mt-1 mb-1 rounded regular flex items-center lg:gap-12 pl-5 pr-5 cursor-pointer bg-[#fdd106]'
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setIsPopupOpened(!isPopupOpened);
              }}
            >
              {language === 'EN'
                ? localStorage.getItem('selectedPlatform') === 'TV'
                  ? localStorage.getItem('tvCountry')
                    ? `Country (${localStorage
                        .getItem('tvCountry')
                        .slice(0, 3)})`
                    : 'Country'
                  : localStorage.getItem('selectedPlatform') === 'APP'
                  ? localStorage.getItem('appCountry')
                    ? `Country (${localStorage
                        .getItem('appCountry')
                        .slice(0, 3)})`
                    : 'Country'
                  : 'Country'
                : language === 'KA'
                ? localStorage.getItem('selectedPlatform') === 'TV'
                  ? localStorage.getItem('tvCountry')
                    ? `ქვეყანა (${translations[language][
                        localStorage.getItem('tvCountry')
                      ].slice(0, 3)})`
                    : 'ქვეყანა'
                  : localStorage.getItem('selectedPlatform') === 'APP'
                  ? localStorage.getItem('appCountry')
                    ? `ქვეყანა (${translations[language][
                        localStorage.getItem('appCountry')
                      ].slice(0, 3)})`
                    : 'ქვეყანა'
                  : 'ქვეყანა'
                : language === 'RU'
                ? localStorage.getItem('selectedPlatform') === 'TV'
                  ? localStorage.getItem('tvCountry')
                    ? `Страна (${translations[language][
                        localStorage.getItem('tvCountry')
                      ].slice(0, 3)})`
                    : 'Страна'
                  : localStorage.getItem('selectedPlatform') === 'APP'
                  ? localStorage.getItem('appCountry')
                    ? `Страна (${translations[language][
                        localStorage.getItem('appCountry')
                      ].slice(0, 3)})`
                    : 'Страна'
                  : 'Страна'
                : 'Country'}
              <IoMdArrowDropdown className='text-3xl' />
            </div>
          </div>
        </div>
      </div>
      <div className='country-selector__right block sm:hidden mt-5'>
        <div
          name=''
          id=''
          className='h-12 mt-1 mb-1 rounded regular text-base items-center lg:gap-12 pl-5 pr-5 cursor-pointer bg-[#fdd106] flex justify-between'
          onClick={() => {
            document.body.style.overflow = 'hidden';
            setIsPopupOpened(!isPopupOpened);
          }}
        >
          {language === 'EN'
            ? localStorage.getItem('selectedPlatform') === 'TV'
              ? localStorage.getItem('tvCountry')
                ? `Country (${localStorage.getItem('tvCountry').slice(0, 3)})`
                : 'Country'
              : localStorage.getItem('selectedPlatform') === 'APP'
              ? localStorage.getItem('appCountry')
                ? `Country (${localStorage.getItem('appCountry').slice(0, 3)})`
                : 'Country'
              : 'Country'
            : language === 'KA'
            ? localStorage.getItem('selectedPlatform') === 'TV'
              ? localStorage.getItem('tvCountry')
                ? `ქვეყანა (${translations[language][
                    localStorage.getItem('tvCountry')
                  ].slice(0, 3)})`
                : 'ქვეყანა'
              : localStorage.getItem('selectedPlatform') === 'APP'
              ? localStorage.getItem('appCountry')
                ? `ქვეყანა (${translations[language][
                    localStorage.getItem('appCountry')
                  ].slice(0, 3)})`
                : 'ქვეყანა'
              : 'ქვეყანა'
            : language === 'RU'
            ? localStorage.getItem('selectedPlatform') === 'TV'
              ? localStorage.getItem('tvCountry')
                ? `Страна (${translations[language][
                    localStorage.getItem('tvCountry')
                  ].slice(0, 3)})`
                : 'Страна'
              : localStorage.getItem('selectedPlatform') === 'APP'
              ? localStorage.getItem('appCountry')
                ? `Страна (${translations[language][
                    localStorage.getItem('appCountry')
                  ].slice(0, 3)})`
                : 'Страна'
              : 'Страна'
            : 'Country'}
          <IoMdArrowDropdown className='text-3xl' />
        </div>
      </div>
      {isPopupOpened ? (
        <CountryPopup setIsPopupOpened={setIsPopupOpened} />
      ) : localStorage.getItem('selectedPlatform') === 'APP' &&
        !localStorage.getItem('appCountry') ? (
          <CountryPopup setIsPopupOpened={setIsPopupOpened} />;
      ) : (
        ''
      )}
    </>
  );
};

export default CountrySelector;
