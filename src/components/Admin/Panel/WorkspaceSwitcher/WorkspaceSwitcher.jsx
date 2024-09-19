import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkspaceSwitcherPopup from './WorkspaceSwitcherPopup';
import { setCurrentWorkspace } from '../../../../features/workspace/workspaceSlice';

const WorkspaceSwitcher = () => {
  const dispatch = useDispatch();

  const [switcherPopupVisible, setSwitcherPopupVisible] = useState(false);

  const currentWorkspace = useSelector(
    (store) => store.workspace.currentWorkspace
  );
  let workspaces = useSelector((store) => store.workspace.workspaces);
  workspaces = workspaces.filter(
    (workspace) => workspace.name !== currentWorkspace
  );

  const handleSwitchWorkspace = (workspace) => {
    setSwitcherPopupVisible(false);
    dispatch(setCurrentWorkspace(workspace));
    window.location.reload();
  };

  return (
    <div className='panel__workspace-switcher relative'>
      <div
        className='panel__workspace-switcher---wrapper border border-[#434a60] rounded-xl p-2 flex items-center justify-between mt-7 cursor-pointer'
        onClick={(e) => setSwitcherPopupVisible(!switcherPopupVisible)}
      >
        <div className='panel__workspace-switcher---content flex items-center gap-4'>
          <div className='panel__workspace-switcher---logo w-10 h-10 bg-[#FFBC10] rounded-md flex items-center justify-center text-sm'>
            {currentWorkspace.slice(0, 2).toUpperCase()}
          </div>
          <div className='panel__workspace-switcher---details flex flex-col gap-0'>
            <div className='panel__workspace-switcher---label text-[#8a94a6] text-sm'>
              Workspace
            </div>
            <div className='panel__workspace-switcher---name text-[#b3b9c6] text-base'>
              {currentWorkspace}
            </div>
          </div>
        </div>
        <div className='panel__workspace-switcher---icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='#8a94a6'
            viewBox='0 0 256 256'
            fontSize='1rem'
          >
            <path d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'></path>
          </svg>
        </div>
      </div>
      {switcherPopupVisible && (
        <WorkspaceSwitcherPopup
          workspaces={workspaces}
          switcherPopupVisible={switcherPopupVisible}
          setSwitcherPopupVisible={setSwitcherPopupVisible}
          handleSwitchWorkspace={handleSwitchWorkspace}
        />
      )}
    </div>
  );
};

export default WorkspaceSwitcher;
