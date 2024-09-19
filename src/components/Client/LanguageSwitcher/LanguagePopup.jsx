import styled from 'styled-components';

const Popup = styled.div`
  background-color: #1e1e1e;
`;

const LanguagePopup = ({ languages }) => {
  return (
    <Popup className='language-popup absolute left-0 w-full top-14 rounded shadow-sm overflow-clip'>
      <ul>
        {languages?.map((language) => (
          <li
            key={language}
            className='language-popup__lang text-center w-full flex justify-center items-flex-start'
          >
            <button
              onClick={() => {
                localStorage.setItem('language', language);
                language === 'KA'
                  ? localStorage.setItem('tvCountry', 'Georgia')
                  : localStorage.removeItem('tvCountry');
                window.location.reload();
              }}
              className=' w-full h-full hover:bg-white hover:text-black pt-2 pb-2'
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </Popup>
  );
};

export default LanguagePopup;
