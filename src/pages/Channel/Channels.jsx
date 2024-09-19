import { useDispatch, useSelector } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import { useEffect } from 'react';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import UserColumn from '../../components/Admin/Dashboard/Tabs/UserColumn';
import { deleteChannel, modifyChannel } from '../../features/channel/Thunks';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector((store) => store.channel.channels);

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(setDropdownOpened({ id: 'channels', boolean: true }));
  }, [dispatch]);
  const countryList = useSelector((store) => store.country.countries);
  const options = Object.entries(countryList).map(([key, value]) => {
    return { value: value.name.toLowerCase(), label: value.name };
  });

  const handleSubmit = (payload) => {
    const formData = new FormData();

    Object.entries(payload).map(([key, value]) => {
      if (key !== 'id') {
        if (key === 'relation') {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }
    });

    dispatch(
      modifyChannel({
        id: payload.id,
        data: formData,
        dispatch,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteChannel({ id, dispatch }));
  };

  return (
    <TabContainer title={'Channels'} showBtn={true}>
      <TableList
        data={channels}
        thead={['Logo', 'Channel', 'Countries', 'Created at', '']}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        Column={UserColumn}
        options={options}
      ></TableList>
    </TabContainer>
  );
};

export default Channels;
