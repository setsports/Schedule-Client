import { Link, useLocation } from "react-router-dom";

const MenuDropdownItem = ({ label, link }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        className={
          link === location.pathname
            ? "panel__menu---dropdown-item cursor-pointer rounded-md p-2 block w-full bg-[#635BFF] text-white"
            : "panel__menu---dropdown-item cursor-pointer rounded-md p-2 text-[#b3b9c6] lg:hover:bg-[#1B1F2A] block w-full"
        }
        to={link}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuDropdownItem;
