import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import MobileDropdown from './MobileDropdown';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useSelector } from 'react-redux';

const Logo = styled.img`
  height: 35px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const CTA = styled(Link)`
  border: 1px solid #ffd106;
  background-color: #1e1e1e;
  border-radius: 3px;
  padding: 8px 25px;
  font-size: 14px;
`;

const MobileButton = styled.button`
  background-color: #f4f4f4;
  border-radius: 3px;
  padding: 7px;
  color: #1e1e1e;
`;

const MenuItem = styled.a`
  color: white;
  transition: 0.3s all;
`;

const MobileHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isNewsOpened, setIsNewsOpened] = useState(false);
  const [isScoresOpened, setIsScoresOpened] = useState(false);

  const translations = useSelector((store) => store.client.translations);

  const language = localStorage.getItem('language') || 'EN';

  return (
    <header className='mobile-header bg-black z-50 fixed w-full'>
      <nav className='mobile-nav bg-black'>
        <div className='mobile-nav__wrapper w-full pt-5 pb-5 flex justify-between items-center'>
          <div className='mobile-nav__left'>
            <div className='nav__logo'>
              <Logo src='../src/assets/images/nav-logo.svg' alt='' />
            </div>
          </div>
          <div className='mobile-nav__right flex items-center gap-2'>
            <CTA to='https://app.setantasports.com' className='yellow regular'>
              {translations[language]['Watch Now']}
            </CTA>
            <MobileButton className='nav__mobile-btn'>
              {!isOpened && (
                <FiMenu
                  className=' text-2xl'
                  onClick={(e) => setIsOpened(!isOpened)}
                />
              )}
              {isOpened && (
                <IoClose
                  className='text-2xl'
                  onClick={(e) => setIsOpened(false)}
                />
              )}
            </MobileButton>
          </div>
        </div>

        {isOpened && (
          <>
            <ul className='mobile-nav__ul flex flex-col gap-6 bg-black border-t-2 w-full absolute left-1/2 -translate-x-1/2 pt-6 pb-6 h-screen z-50'>
              <li>
                <MenuItem href='/' className='regular'>
                  {translations[language]['Home']}
                </MenuItem>
              </li>
              <li>
                <MenuItem className='regular'>
                  <div
                    className='flex justify-between items-center'
                    onClick={() => setIsNewsOpened(!isNewsOpened)}
                  >
                    {translations[language]['News']}
                    <FaChevronDown />
                  </div>
                  {isNewsOpened && (
                    <MobileDropdown
                      content={[
                        {
                          name: translations[language]['Football'],
                          url: `https://setantasports.com${
                            language.toLowerCase() === 'en'
                              ? ''
                              : '/' + language.toLowerCase()
                          }/football`,
                        },
                        {
                          name: translations[language]['Basketball'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : '/' + language.toLowerCase()
                          }basketball`,
                        },
                        {
                          name: translations[language]['MMA'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : '/' + language.toLowerCase()
                          }mma`,
                        },
                        {
                          name: translations[language]['Racing'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : '/' + language.toLowerCase()
                          }racing`,
                        },
                        {
                          name: translations[language]['Tennis'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : '/' + language.toLowerCase()
                          }tennis`,
                        },
                      ]}
                    />
                  )}
                </MenuItem>
              </li>
              <li>
                <MenuItem className='regular'>
                  <div
                    className='flex justify-between items-center'
                    onClick={() => setIsScoresOpened(!isScoresOpened)}
                  >
                    {translations[language]['Scores']}
                    <FaChevronDown />
                  </div>
                  {isScoresOpened && (
                    <MobileDropdown
                      content={[
                        {
                          name: translations[language]['Premier League'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : language.toLowerCase() + '/'
                          }football/premier-league/standings-pl`,
                        },
                        {
                          name: translations[language]['Bundesliga'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : language.toLowerCase() + '/'
                          }football/bundesliga/standings-bl`,
                        },
                        {
                          name: translations[language]['La Liga'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : language.toLowerCase() + '/'
                          }football/la-liga/standings-ll`,
                        },
                        {
                          name: translations[language]['Serie A'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : language.toLowerCase() + '/'
                          }football/serie-a/standings-sa`,
                        },
                        {
                          name: translations[language]['Ligue 1'],
                          url: `https://setantasports.com/${
                            language.toLowerCase() === 'en'
                              ? ''
                              : language.toLowerCase() + '/'
                          }football/ligue-1/standings-l1`,
                        },
                      ]}
                    />
                  )}
                </MenuItem>
              </li>
              <LanguageSwitcher />

              <CTA to='https://app.setantasports.com' className='yellow regular text-center'>
                {translations[language]['Watch Now']}
              </CTA>

              <p className='regular text-white text-center'>Sign up</p>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default MobileHeader;
