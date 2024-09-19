import { useDispatch, useSelector } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import { useEffect } from 'react';
import {
  deleteUser,
  getUsers,
  modifySingleUser,
} from '../../features/user/Thunks';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import UserColumn from '../../components/Admin/Dashboard/Tabs/UserColumn';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'users',
        boolean: true,
      })
    );
  }, [dispatch]);

  const users = useSelector((store) => store.user.users);

  const handleSubmit = (payload) => {
    const formData = new FormData();

    Object.entries(payload).map(([key, value]) => {
      if (key !== 'id') formData.append(key, value);
    });

    dispatch(
      modifySingleUser({
        id: payload.id,
        data: formData,
        dispatch,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
        dispatch,
      })
    );
  };

  return (
    <TabContainer title={'Users'} showBtn={true}>
      <TableList
        data={users}
        thead={[
          'Avatar',
          'First name',
          'Last name',
          'Email',
          'Role',
          'Created at',
          '',
        ]}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        Column={UserColumn}
      ></TableList>
    </TabContainer>
  );
};

export default Users;
