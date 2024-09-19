import { useDispatch, useSelector } from 'react-redux';
import { PiUserLight } from 'react-icons/pi';
import { CiLogout } from 'react-icons/ci';
import OutsideClickHandler from 'react-outside-click-handler';
import { logoutUser } from '../../../features/user/Thunks';
import { Link } from 'react-router-dom';

const AccountPopup = ({ showAccountPopup, setShowAccountPopup }) => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  return (
    <OutsideClickHandler
      onOutsideClick={(e) => {
        if (!e.target.closest('.header__account---profile-picture')) {
          setShowAccountPopup(false);
        }
      }}
    >
      <div
        className={
          showAccountPopup
            ? 'header__account---popup absolute rounded-md border border-[#02020226] right-0 bg-white mt-1 animate-[popupTopDown_0.15s_linear] shadow-[0px_1px_2px_rgba(0,0,0,0.08)]'
            : 'header__account---popup absolute rounded-md border border-[#02020226] right-0 bg-white mt-1 animate-[popupTopUp_0.15s_linear] shadow-[0px_1px_2px_rgba(0,0,0,0.08)]'
        }
      >
        <div className='header__account---popup-details border-b-[1px] border-[#02020226] p-4'>
          <div className='header__account---popup-name text-[#212636] w-full mr-[200px]'>
            {`${user?.firstName + ' ' + user?.lastName}`}
          </div>
          <div className='header__account---popup-email text-sm text-[#667085]'>
            {user?.email}
          </div>
        </div>
        <div className='header__account---popup-actions p-4'>
          <Link
            to='admin/dashboard/users/account'
            className='header__account---popup-action flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100'
            onClick={(e) => setShowAccountPopup(false)}
          >
            <PiUserLight className='text-lg' />
            Account
          </Link>
          <div
            className='header__account---popup-action flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100'
            onClick={(e) => dispatch(logoutUser())}
          >
            <CiLogout className='text-lg rotate-180' />
            Sign out
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default AccountPopup;
