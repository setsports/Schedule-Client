import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import {
  deleteSport,
  getSports,
  modifySport,
} from '../../features/sport/Thunks';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import TableColumn from '../../components/Admin/Dashboard/Tabs/TableColumn';
import UserColumn from '../../components/Admin/Dashboard/Tabs/UserColumn';

const Sports = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'sports',
        boolean: true,
      })
    );
  }, [dispatch]);

  const sports = useSelector((store) => store.sport.sports);

  const handleSubmit = (payload) => {
    dispatch(modifySport({ id: payload.id, data: payload, dispatch }));
  };

  const handleDelete = (id) => {
    dispatch(deleteSport({ id, dispatch }));
  };

  return (
    <TabContainer title={'Sports'} showBtn={true}>
      <TableList
        data={sports}
        thead={['Sport', 'Platform(s)', 'Created at', '']}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        options={[
          { value: 'APP', label: 'APP' },
          { value: 'TV', label: 'TV' },
        ]}
        Column={UserColumn}
      ></TableList>
    </TabContainer>
  );
};

export default Sports;
