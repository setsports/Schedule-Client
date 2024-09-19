import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWeek } from '../../features/week/Thunks';
import {
  getAppCountries,
  getClientCountries,
} from '../../features/country/Thunks';
import { getSports } from '../../features/sport/Thunks';
import { getClientChannels } from '../../features/channel/Thunks';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'EN');
    }
    if (!localStorage.getItem('selectedPlatform')) {
      localStorage.setItem('selectedPlatform', 'APP');
    }

    const language = localStorage.getItem('language');

    dispatch(getWeek());
    localStorage.getItem('selectedPlatform') === 'APP'
      ? dispatch(getAppCountries(dispatch))
      : dispatch(
          getClientCountries(
            {
              language:
                language === 'EN'
                  ? 'English'
                  : language === 'KA'
                  ? 'Georgian'
                  : language === 'RU'
                  ? 'Russian'
                  : '',
            },
            dispatch
          )
        );
    dispatch(getSports());
    dispatch(
      getClientChannels({
        country: localStorage.getItem('tvCountry'),
        dispatch,
      })
    );
  }, [dispatch]);

  const week = useSelector((store) => store.week.week);
  const countries = useSelector((store) => store.country.clientCountries);
  const sports = useSelector((store) => store.sport.sports);
  const channels = useSelector((store) => store.channel.clientChannels);

  const constraint = week.start && week.end && countries && sports && channels;

  return (
    <>
      <Header />
      <MobileHeader />
      {constraint ? <Outlet /> : <div className='loader'></div>}
    </>
  );
};

export default Layout;
