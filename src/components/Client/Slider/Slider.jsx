import { useDispatch, useSelector } from 'react-redux';
import dates from '../../../data/dates.json';
import { useRef } from 'react';
import { setWeek } from '../../../features/client/clientSlice';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function getDatesBetween(startDate, endDate) {
  let dates = [];
  let currentDate = new Date(startDate);
  endDate = new Date(endDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export default function Slider() {
  const dispatch = useDispatch();
  const selectedWeek = useSelector((store) => store.client.date);
  const { start, end } = useSelector((store) => store.week.week);
  const language = localStorage.getItem('language');
  const weekRange = getDatesBetween(start, end);

  const splideRef = useRef(null);

  const handleNext = () => {
    splideRef.current.splide.go('>');
  };

  const handlePrev = () => {
    splideRef.current.splide.go('<');
  };

  const calculateStartId = (() => {
    let startId = 0;
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      String(today.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(today.getDate()).padStart(2, '0');

    Object.entries(weekRange).forEach(([key, value]) => {
      const weekDate = value.toISOString().split('T')[0];
      const year = weekDate.split('-')[0];
      const month = weekDate.split('-')[1];
      const day = weekDate.split('-')[2];
      const format = `${year}-${month}-${day}`;

      const condition = date === format;

      condition ? (startId = key) : '';
    });

    return startId;
  })();

  if (start && end) {
    return (
      <div className='flex justify-between gap-5 lg:gap-10 text-center mt-5'>
        <Splide
          ref={splideRef}
          options={{
            perPage: 7,
            pagination: false,
            drag: true,
            gap: '20px',
            perMove: 1,
            breakpoints: {
              1200: {
                gap: '20px',
                perPage: 5,
              },
              768: {
                gap: '20px',
                perPage: 3,
              },
              480: {
                gap: '20px',
                perPage: 2,
              },
            },
            start: calculateStartId,
          }}
          className='p-0 w-[100%]'
        >
          {weekRange.map((date) => {
            const weekDate = date.toISOString().split('T')[0];
            const year = weekDate.split('-')[0];
            const month = weekDate.split('-')[1];
            const day = weekDate.split('-')[2];
            const format = `${year}-${month}-${day}`;

            const condition = selectedWeek === format;

            return (
              <SplideSlide
                className={`rounded overflow-hidden regular cursor-pointer ${
                  condition && 'text-[#fdd106]'
                }`}
                id={format}
                key={date}
                onClick={() => dispatch(setWeek(format))}
              >
                <div
                  className={`date-slider__day bg-neutral-900 text-md sm:text-xl pt-1 pb-1 ${
                    condition ? 'text-[#fdd106]' : 'text-white'
                  }`}
                >
                  {dates[language]['days'][date.getDay()]}
                </div>
                <div
                  className={`date-slider__month pt-3 pb-3 flex gap-2 items-center justify-center md:block ${
                    condition ? 'bg-neutral-900' : 'bg-white'
                  }`}
                >
                  <div className='date-slider__month-number text-base sm:text-3xl regular'>
                    {day}
                  </div>
                  <div className='date-slider__month-name text-md sm:text-lg'>
                    {' '}
                    {dates[language]['months'][date.getMonth()]}
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    );
  } else {
    return (
      <div className='mt-5'>
        <SkeletonTheme baseColor='darkgray'>
          <Skeleton height={'125px'} count={1}></Skeleton>
        </SkeletonTheme>
      </div>
    );
  }
}
