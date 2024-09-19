const WorkspaceSwitcherPopupItem = ({ label, slug, handleSwitchWorkspace }) => {
  return (
    <div
      className='panel__workspace-switcher---popup-item flex items-center gap-3 p-2 lg:hover:bg-gray-100 rounded-md cursor-pointer'
      onClick={() => handleSwitchWorkspace(label)}
    >
      <div className='panel__workspace-switcher---popup-item__logo w-8 h-8 bg-[#FFBC10] rounded-md flex items-center justify-center text-xs'>
        {slug}
      </div>
      <div className='panel__workspace-switcher---popup-item__title text-[#121621]'>
        {label.slice(0, 1).toUpperCase() + label.slice(1)}
      </div>
    </div>
  );
};

export default WorkspaceSwitcherPopupItem;
