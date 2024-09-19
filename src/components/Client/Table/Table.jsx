import React from 'react';
import { useSelector } from 'react-redux';
import TableColumn from './TableColumn';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from 'react-query';
import { getGames, getAppGames } from '../../../features/game/gameQuery';

function filterData(data, filters) {
  const { sport, channel } = filters;

  if (sport.length === 0 && channel.length === 0) {
    // Return data grouped by country and sorted by time
    return Object.entries(data).reduce((grouped, [key, item]) => {
      const country = item.country;

      if (!grouped[country]) {
        grouped[country] = [];
      }

      grouped[country].push(item);

      // Sort games by time
      grouped[country].sort((a, b) => {
        const [aHours, aMinutes] = a.time.split(':').map(Number);
        const [bHours, bMinutes] = b.time.split(':').map(Number);
        return aHours - bHours || aMinutes - bMinutes;
      });

      return grouped;
    }, {});
  }

  return (
    data &&
    Object.entries(data).reduce((grouped, [key, item]) => {
      const matchesSport = sport.length === 0 || sport.includes(item.sport);
      const matchesChannel =
        channel.length === 0 ||
        item.channel.some((chan) => channel.includes(chan.name));

      if (matchesSport && matchesChannel) {
        const country = item.country;

        if (!grouped[country]) {
          grouped[country] = [];
        }

        grouped[country].push(item);

        // Sort games by time
        grouped[country].sort((a, b) => {
          const [aHours, aMinutes] = a.time.split(':').map(Number);
          const [bHours, bMinutes] = b.time.split(':').map(Number);
          return aHours - bHours || aMinutes - bMinutes;
        });
      }

      return grouped;
    }, {})
  );
}

const Table = () => {
  const filter = useSelector((store) => store.client.filter);
  const date = useSelector((store) => store.client.date);
  const country =
    localStorage.getItem('selectedPlatform') === 'TV'
      ? localStorage.getItem('tvCountry')
      : localStorage.getItem('selectedPlatform') === 'APP'
      ? localStorage.getItem('appCountry')
      : '';
  const gmt = useSelector((store) => store.country.clientCountries).filter(
    (filteredCountry) => filteredCountry.name === country
  )[0]?.gmt;

  const { data, error, isLoading } =
    localStorage.getItem('selectedPlatform') === 'APP'
      ? useQuery(
          [
            'getAppGames',
            {
              date: date.toString(),
              country,
              gmt,
            },
          ],
          getAppGames,
          {
            staleTime: 60000,
            cacheTime: 300000,
          }
        )
      : useQuery(
          [
            'getGames',
            {
              date: date.toString(),
              language: localStorage.getItem('language'),
              country,
            },
          ],
          getGames,
          {
            staleTime: 60000,
            cacheTime: 300000,
          }
        );

  const filteredData = data ? filterData(data, filter) : {};

  const translations = useSelector((store) => store.client.translations);
  const language = localStorage.getItem('language');

  return (
    <div className='sports-table mt-5'>
      <div className='sports-table__wrapper flex flex-col gap-3'>
        {isLoading ? (
          <SkeletonTheme baseColor='darkgray'>
            <div className='flex flex-col gap-3'>
              <Skeleton height={'120px'} />
              <Skeleton height={'120px'} />
              <Skeleton height={'120px'} />
              <Skeleton height={'120px'} />
              <Skeleton height={'120px'} />
            </div>
          </SkeletonTheme>
        ) : error ? (
          <div>Error loading data</div>
        ) : (
          Object.entries(filteredData).map(([country, games]) => (
            <div key={country} className='flex flex-col gap-3'>
              {localStorage.getItem('selectedPlatform') !== 'APP' && (
                <h2 className='text-xl regular mt-3'>
                  {translations[language][country]}
                </h2>
              )}
              {games.map((game, index) => (
                <TableColumn key={index} data={game} />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Table;
