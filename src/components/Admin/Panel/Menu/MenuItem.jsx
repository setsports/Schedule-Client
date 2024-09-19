import { useDispatch, useSelector } from 'react-redux';
import { setDropdownOpened } from '../../../../features/menu/menuSlice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import {
  PiHouse,
  PiUsersThreeLight,
  PiFootball,
  PiCirclesThreePlus,
  PiGlobe,
  PiTelevisionSimple,
  PiCalendar,
} from 'react-icons/pi';
import { MdSportsCricket } from 'react-icons/md';
import { CiGrid41, CiBasketball, CiSettings } from 'react-icons/ci';
import MenuDropdown from './MenuDropdown';
import MenuDropdownItem from './MenuDropdownItem';

const MenuItem = ({ id, label, icon, link, children }) => {
  const dispatch = useDispatch();
  const menuItems = useSelector((store) => store.menu.menuItems);
  const location = useLocation();

  const renderIcon = () => {
    switch (icon) {
      case 'PiHouse':
        return <PiHouse className='text-[22px]' />;
      case 'PiUsersThreeLight':
        return <PiUsersThreeLight className='text-[22px]' />;
      case 'CiGrid41':
        return <CiGrid41 className='text-[22px]' />;
      case 'CiBasketball':
        return <CiBasketball className='text-[22px]' />;
      case 'CiSettings':
        return <CiSettings className='text-[22px]' />;
      case 'PiFootball':
        return <PiFootball className='text-[22px]' />;
      case 'PiCirclesThreePlus':
        return <PiCirclesThreePlus className='text-[22px]' />;
      case 'PiGlobe':
        return <PiGlobe className='text-[22px]' />;
      case 'PiTelevisionSimple':
        return <PiTelevisionSimple className='text-[22px]' />;
      case 'MdSportsCricket':
        return <MdSportsCricket className='text-[22px]' />;
      case 'PiCalendar':
        return <PiCalendar className='text-[22px]' />;
      default:
        return null;
    }
  };

  if (children) {
    return (
      <>
        <li
          className={
            'panel__menu---item rounded-md p-2 flex items-center justify-between gap-2 cursor-pointer text-[#b3b9c6] lg:hover:bg-[#1B1F2A]'
          }
          onClick={() => {
            dispatch(
              setDropdownOpened({
                id,
                boolean: !menuItems[id].dropdownOpened,
              })
            );
          }}
        >
          <div className='panel__menu---item-left flex items-center gap-2'>
            {icon && renderIcon()}
            {label}
          </div>
          <div className='panel__menu---item-flex__right'>
            {children && menuItems[id].dropdownOpened ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </div>
        </li>
        {menuItems[id].dropdownOpened && (
          <MenuDropdown>
            {Object.entries(children).map(([key, value]) => {
              const { id, label, link } = value;
              return <MenuDropdownItem key={id} label={label} link={link} />;
            })}
          </MenuDropdown>
        )}
      </>
    );
  }

  return (
    <li>
      <Link
        to={link}
        className={
          location.pathname === link
            ? 'panel__menu---item rounded-md p-2 flex items-center gap-2 cursor-pointer bg-[#635BFF] text-white'
            : 'panel__menu---item rounded-md p-2 flex items-center gap-2 cursor-pointer text-[#b3b9c6] lg:hover:bg-[#1B1F2A]'
        }
      >
        {icon && renderIcon()}
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
