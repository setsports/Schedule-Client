import WorkspaceSwitcher from './WorkspaceSwitcher/WorkspaceSwitcher';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';

const Panel = ({ showPanel }) => {
  return (
    <div
      className={
        showPanel
          ? 'panel w-[320px] h-screen bg-[#121621] p-4 outfit text-white fixed left-0 transition-all duration-500 overflow-auto scroll'
          : 'panel w-[320px] h-screen bg-[#121621] p-4 outfit text-white fixed -left-[320px] md:left-0 transition-all duration-500 overflow-auto scroll'
      }
    >
      <div className='panel__logo text-center'>
        <Link to='/'>
          <img
            src='../../../src/assets/images/logo.svg'
            alt='Logo'
            className=' w-56'
          />
        </Link>
      </div>
      <WorkspaceSwitcher />
      <Menu />
    </div>
  );
};

export default Panel;
