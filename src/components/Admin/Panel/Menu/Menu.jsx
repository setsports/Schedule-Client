import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuItems = useSelector((store) => store.menu.menuItems);
  return (
    <nav className='panel__menu mt-10'>
      <ul className='panel__menu---list flex flex-col gap-2'>
        {Object.entries(menuItems).map(([key, value]) => {
          const { id, label, icon, link, children } = value;

          return (
            <MenuItem
              key={id}
              id={key}
              label={label}
              icon={icon}
              link={link}
              children={children}
            />
          );
        })}

        {/* {Object.entries(menuItems[0]).map(([key, value]) => {
          const { id, label, icon, link, children } = value;

          return (
            <MenuItem
              key={id}
              id={key}
              label={label}
              icon={icon}
              link={link}
              children={children}
            >
              {children}
            </MenuItem>
          );
        })} */}

        {/* <MenuItem
          label="Dashboard"
          icon={<PiHouse className="text-[22px]" />}
          link={"/admin/dashboard"}
        />
        <MenuItem
          label="Users"
          icon={<PiUsersThreeLight className="text-[22px]" />}
          link={"/admin/dashboard/users"}
        >
          <MenuDropdown>
            <MenuDropdownItem label="Create user"></MenuDropdownItem>
          </MenuDropdown>
        </MenuItem>
        <MenuItem label="Games" icon={<CiGrid41 className="text-[22px]" />} />
        <MenuItem
          label="Sports"
          icon={<CiBasketball className="text-[22px]" />}
        >
          <MenuDropdown>
            <MenuDropdownItem label="Football" />
            <MenuDropdownItem label="Basketball" />
            <MenuDropdownItem label="MMA" />
            <MenuDropdownItem label="Tennis" />
            <MenuDropdownItem label="Racing" />
          </MenuDropdown>
        </MenuItem>
        <MenuItem label="Countries" icon={<CiGlobe className="text-[22px]" />}>
          <MenuDropdown>
            <MenuDropdownItem label="Georgia" />
            <MenuDropdownItem label="Ukraine" />
            <MenuDropdownItem label="Azerbaijan" />
            <MenuDropdownItem label="Moldova" />
          </MenuDropdown>
        </MenuItem> */}
      </ul>
    </nav>
  );
};

export default Menu;
