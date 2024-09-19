import { useDispatch, useSelector } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import { useEffect } from 'react';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import {
  deleteAppCountry,
  deleteCountry,
  modifyAppCountry,
  modifyCountry,
} from '../../features/country/Thunks';
import UserColumn from '../../components/Admin/Dashboard/Tabs/UserColumn';

const AppCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.country.clientCountries);

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(setDropdownOpened({ id: 'countries', boolean: true }));
  }, [dispatch]);

  const handleSubmit = (payload) => {
    const formData = new FormData();

    Object.entries(payload).map(([key, value]) => {
      if (key !== 'id') {
        console.log(key, value);

        formData.append(key, value);
      }
    });

    dispatch(
      modifyAppCountry({
        id: payload.id,
        data: formData,
        dispatch,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteAppCountry({ id, dispatch }));
  };

  return (
    <TabContainer title={'App countries'} showBtn={true}>
      <TableList
        data={countries}
        thead={['Flag', 'Country', 'GMT', 'Created at', '']}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        options={[]}
        Column={UserColumn}
      ></TableList>
    </TabContainer>
  );
};

export default AppCountries;
