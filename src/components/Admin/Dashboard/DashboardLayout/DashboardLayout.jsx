import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Outlet } from 'react-router-dom';
import Panel from '../../Panel/Panel';
import Header from '../../Header/Header';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, getUser, getUsers } from '../../../../features/user/Thunks';
import { getWorkspaces } from '../../../../features/workspace/Thunks';
import { setCurrentWorkspace } from '../../../../features/workspace/workspaceSlice';
import { getSports } from '../../../../features/sport/Thunks';
import {
  getAppCountries,
  getCountries,
} from '../../../../features/country/Thunks';
import { getChannels } from '../../../../features/channel/Thunks';

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((store) => store.user.status);
  const message = useSelector((store) => store.alert.message);
  const [showPanel, setShowPanel] = useState(false);

  const { type, messageTxt } = message;

  useEffect(() => {
    if (!localStorage.getItem('currentWorkspace')) {
      localStorage.setItem('currentWorkspace', 'English');
    }
    dispatch(setCurrentWorkspace(localStorage.getItem('currentWorkspace')));
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth(dispatch));
    dispatch(getUser());
    dispatch(getUsers());
    dispatch(getWorkspaces());
    dispatch(getSports());
    dispatch(
      getCountries(
        {
          language: localStorage.getItem('currentWorkspace'),
        },
        dispatch
      )
    );
    dispatch(getAppCountries(dispatch));
    dispatch(getChannels());
  }, [dispatch]);

  useEffect(() => {
    type === 'danger'
      ? toast.error(messageTxt)
      : type === 'success'
      ? toast.success(messageTxt)
      : ' ';
  }, [message]);

  const user = useSelector((store) => store.user.user);
  const workspaces = useSelector((store) => store.workspace.workspaces);
  const sports = useSelector((store) => store.sport.sports);
  const countries = useSelector((store) => store.country.countries);
  const channels = useSelector((store) => store.channel.channels);

  if (authStatus === undefined || authStatus === 'pending') {
    return <div className='loader'></div>;
  } else if (authStatus === 'fulfilled') {
    if (user && workspaces && sports && countries && channels) {
      return (
        <>
          <div className='dashboard flex h-screen'>
            <div
              className={
                showPanel
                  ? 'dashboard__panel md:hidden bg-[#00000080] w-screen h-screen absolute z-10'
                  : ''
              }
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowPanel(false);
                }}
              >
                <Panel showPanel={showPanel} />
              </OutsideClickHandler>
            </div>

            <div className='dashboard__content flex-1 overflow-x-auto md:pl-[320px]'>
              <div className='dashboard__header'>
                <Header setShowPanel={setShowPanel} />
              </div>
              <div className='dashboard__content---wrapper pt-10 pb-10 lg:pt-15 lg:pb-15 pl-3 pr-3 md:pl-7 md:pr-7'>
                <Outlet />
              </div>
            </div>
          </div>

          <Toaster
            position='top-left'
            toastOptions={{
              duration: 1500,
            }}
          />
        </>
      );
    } else {
      return <div className='loader'></div>;
    }
  } else {
    window.location.href = '/admin/login';
  }
};

export default DashboardLayout;
