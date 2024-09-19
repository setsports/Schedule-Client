const MenuDropdown = ({ children }) => {
  return (
    <div className='panel__menu---dropdown ml-[18px] border-l-[1px] border-[#444]'>
      <ul className='panel__menu---dropdown-list pl-5 flex flex-col gap-2'>
        {children}
      </ul>
    </div>
  );
};

export default MenuDropdown;
