import { useState } from 'react';
import AccountPopup from './AccountPopup';
import { FaBars } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const Header = ({ setShowPanel }) => {
  const user = useSelector((store) => store.user.user);

  const [showAccountPopup, setShowAccountPopup] = useState(false);

  let profilePicture =
    import.meta.env.VITE_API_BASE_URI + '/uploads/' + user.picture;

  return (
    <header className='dashboard__header p-3 md:p-7 md:pt-3 md:pb-3 border-b-[1px] border-[#02020226] w-full flex justify-between md:justify-end items-center outfit'>
      <div className='dashboard__header---menu-btn block md:hidden'>
        <FaBars
          className='text-xl cursor-pointer'
          onClick={() => setShowPanel(true)}
        />
      </div>
      <div className='dashboard__header---account relative rounded-full'>
        <div
          style={
            user.picture && {
              backgroundImage: `url('${profilePicture}')`,
            }
          }
          className='dashboard__header---account-profile-picture w-11 h-11 rounded-full bg-gray-300 cursor-pointer text-[15px] font-medium text-gray-500 flex justify-center items-center bg-cover'
          onClick={(e) => setShowAccountPopup(!showAccountPopup)}
        >
          {!user.picture && user?.firstName[0].toUpperCase()}{' '}
          {!user.picture && user?.lastName[0].toUpperCase()}
        </div>
        {showAccountPopup && (
          <AccountPopup
            showAccountPopup={showAccountPopup}
            setShowAccountPopup={setShowAccountPopup}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
