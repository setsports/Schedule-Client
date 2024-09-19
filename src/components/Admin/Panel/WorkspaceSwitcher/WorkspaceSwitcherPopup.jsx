import WorkspaceSwitcherPopupItem from './WorkspaceSwitcherPopupItem';
import OutsideClickHandler from 'react-outside-click-handler';

const WorkspaceSwitcherPopup = ({
  workspaces,
  switcherPopupVisible,
  setSwitcherPopupVisible,
  handleSwitchWorkspace,
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={(e) => {
        if (!e.target.closest('.panel__workspace-switcher---wrapper')) {
          setSwitcherPopupVisible(false);
        }
      }}
    >
      <div
        className={
          switcherPopupVisible
            ? 'panel__workspace-switcher---popup w-full absolute bg-white rounded-xl flex flex-col p-2 overflow-hidden animate-[popupIn_0.15s_linear]'
            : 'panel__workspace-switcher---popup w-full absolute bg-white rounded-xl flex flex-col p-2 overflow-hidden animate-[popupOut_0.15s_linear]'
        }
      >
        {Object.entries(workspaces).map(([key, value]) => {
          return (
            <WorkspaceSwitcherPopupItem
              key={key}
              label={value.name}
              slug={value.name.slice(0, 2).toUpperCase()}
              handleSwitchWorkspace={handleSwitchWorkspace}
            />
          );
        })}
      </div>
    </OutsideClickHandler>
  );
};

export default WorkspaceSwitcherPopup;
