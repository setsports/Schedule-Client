import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import {
  deleteWorkspace,
  getWorkspaces,
  modifyWorkspace,
} from '../../features/workspace/Thunks';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import TableColumn from '../../components/Admin/Dashboard/Tabs/TableColumn';

const Workspaces = () => {
  const dispatch = useDispatch();
  const workspaces = useSelector((store) => store.workspace.workspaces);

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'workspaces',
        boolean: true,
      })
    );
  }, [dispatch]);

  const handleSubmit = (payload) => {
    const { id, name } = payload;

    dispatch(modifyWorkspace({ name, id, dispatch }));
  };

  const handleDelete = (id) => {
    dispatch(deleteWorkspace({ id, dispatch }));
  };

  return (
    <TabContainer title={'Workspaces'} showBtn={true}>
      {workspaces ? (
        <TableList
          data={workspaces}
          thead={['Workspace', 'Created at', '']}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          Column={TableColumn}
        ></TableList>
      ) : (
        <div className='loader'></div>
      )}
    </TabContainer>
  );
};

export default Workspaces;
