const Alert = ({ type, message }) => {
  // green color for success alert
  const className =
    type === 'danger'
      ? 'auth-form__alert bg-[#FFF2F2] text-[#63302C] p-3 rounded-lg flex gap-3 items-center mb-5'
      : 'auth-form__alert bg-[#F0FFF4] text-[#276749] p-3 rounded-lg flex gap-3 items-center mb-5';
  return (
    // success alert
    <div className={className}>
      {type !== 'danger' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-[#276749]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-[#EB5757]'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 0C4.477 0 0 4.477 0 10c0 3.246 1.685 6.116 4.229
              7.77.315.236.746.15.982-.166.237-.315.15-.746-.166-.982C2.685
              15.116 2 12.709 2 10c0-4.418 3.582-8 8-8s8 3.582 8 8c0
              2.709-.685 5.116-1.777 7.582-.315.236-.403.667-.166.982.237.315.668.403.982.166C18.315
              16.116 20 13.246 20 10c0-5.523-4.477-10-10-10zm-1
              14h2v2h-2v-2zm0-8h2v6h-2V6z'
            clipRule='evenodd'
          />
        </svg>
      )}
      <span className='text-sm'>{message}</span>
    </div>
  );
};

export default Alert;
