import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';
import LanguagePopup from './LanguagePopup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Switcher = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  padding: 9px 0px;
  padding-right: 10px;
  padding-left: 15px;
  cursor: pointer;
`;

const LanguageSwitcher = () => {
  const language = localStorage.getItem('language');

  const [isSwitcherOpened, setIsSwitcherOpened] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        !e.target.closest('.nav-switcher') &&
        !e.target.closest('.language-popup') &&
        !e.target.closest('.language-popup__lang')
      ) {
        setIsSwitcherOpened(false);
      }
    });
  }, []);

  return (
    <Switcher
      className='nav-switcher regular rounded relative'
      onClick={(e) => setIsSwitcherOpened(!isSwitcherOpened)}
    >
      <div className='nav-switcher__content flex items-center justify-between gap-2'>
        <div className='nav-switcher__language regular'>{language}</div>
        <div className='nav-switcher__icon'>
          <IoMdArrowDropdown className='flex text-xl' />
        </div>
      </div>

      {isSwitcherOpened && (
        <LanguagePopup
          languages={['EN', 'KA', 'RU'].filter((lang) => lang !== language)}
        />
      )}
    </Switcher>
  );
};

export default LanguageSwitcher;
