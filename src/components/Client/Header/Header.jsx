import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useSelector } from 'react-redux';

const Logo = styled.img`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const MenuItem = styled.a`
  color: white;
  transition: 0.3s all;

  &:hover {
    color: #ffd106;
  }
`;

const CTA = styled(Link)`
  border: 1px solid #ffd106;
  background-color: #1e1e1e;
  border-radius: 3px;
  padding: 10px 25px;
`;

const Header = () => {
  const [isNewsDropdownOpened, setIsNewsDropdownOpened] = useState(false);
  const [isScoresDropdownOpened, setIsScoresDropdownOpened] = useState(false);

  const translations = useSelector((store) => store.client.translations);

  const language = localStorage.getItem('language') || 'EN';

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if (isNewsDropdownOpened) {
        if (
          e.target.closest('#dropdown__wrapper-news') ||
          e.target.closest('#nav-news')
        ) {
          setIsNewsDropdownOpened(true);
        } else {
          setIsNewsDropdownOpened(false);
        }
      } else if (isScoresDropdownOpened) {
        if (
          e.target.closest('#dropdown__wrapper-scores') ||
          e.target.closest('#nav-scores')
        ) {
          setIsScoresDropdownOpened(true);
        } else {
          setIsScoresDropdownOpened(false);
        }
      }
    });
  });

  return (
    <header className='header bg-black pt-5 pb-5 z-50 fixed w-full'>
      <nav className='navbar flex justify-between items-center'>
        <div className='nav__left flex gap-8 items-center'>
          <div className='nav__logo'>
            <Logo src='https://go.setantasports.com/wp-content/uploads/2023/10/site-logo-home-1.svg' alt='' />
          </div>
          <div className='nav__menu'>
            <ul className='flex gap-10'>
              <li className='relative'>
                <MenuItem href='/' className='regular'>
                  {translations[language]['Home']}
                </MenuItem>
              </li>
              <li className='relative' id='nav-news'>
                <MenuItem
                  href=''
                  className='regular'
                  onMouseEnter={() => setIsNewsDropdownOpened(true)}
                >
                  {translations[language]['News']}
                </MenuItem>
                {isNewsDropdownOpened && (
                  <Dropdown
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
                    id='news'
                  />
                )}
              </li>
              <li className='relative' id='nav-scores'>
                <MenuItem
                  href=''
                  className='regular'
                  onMouseEnter={() => setIsScoresDropdownOpened(true)}
                >
                  {translations[language]['Scores']}
                </MenuItem>
                {isScoresDropdownOpened && (
                  <Dropdown
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
                    id='scores'
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='nav__right flex items-center gap-8'>
          <LanguageSwitcher />
          <CTA to='https://app.setantasports.com' className='yellow regular'>
            {translations[language]['Watch Now']}
          </CTA>
        </div>
      </nav>
    </header>
  );
};

export default Header;
