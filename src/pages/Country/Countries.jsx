import { useDispatch, useSelector } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import { useEffect } from 'react';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import TableList from '../../components/Admin/Dashboard/Tabs/TableList';
import { deleteCountry, modifyCountry } from '../../features/country/Thunks';
import UserColumn from '../../components/Admin/Dashboard/Tabs/UserColumn';

const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((store) => store.country.countries);
  const countries = [];
  allCountries.map((country) => {
    for (let workspace of country.relation) {
      if (workspace.name === localStorage.getItem('currentWorkspace')) {
        countries.push(country);
      }
    }
  });

  const workspaceList = useSelector((store) => store.workspace.workspaces);
  const options = Object.entries(workspaceList).map(([key, value]) => {
    return { value: value.name.toLowerCase(), label: value.name };
  });

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(setDropdownOpened({ id: 'countries', boolean: true }));
  }, [dispatch]);

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
      modifyCountry({
        id: payload.id,
        data: formData,
        dispatch,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteCountry({ id, dispatch }));
  };

  return (
    <TabContainer title={'Countries'} showBtn={true}>
      <TableList
        data={countries}
        thead={['Flag', 'Country', 'Workspaces', 'Created at', '']}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        options={options}
        Column={UserColumn}
      ></TableList>
    </TabContainer>
  );
};

export default Countries;
