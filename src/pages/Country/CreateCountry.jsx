import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import FormSelectMultiple from '../../components/Admin/Dashboard/Forms/FormSelectMultiple';
import { createCountry } from '../../features/country/Thunks';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const CreateCountry = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'countries',
        boolean: true,
      })
    );
  }, [dispatch]);

  const [name, setName] = useState('');
  const [workspaces, setWorkspaces] = useState([]);
  const [picture, setPicture] = useState(null);

  const workspaceList = useSelector((store) => store.workspace.workspaces);
  const options = Object.entries(workspaceList).map(([key, value]) => {
    return { value: value.name.toLowerCase(), label: value.name };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('workspaces', JSON.stringify(workspaces));
    formData.append('picture', picture);

    dispatch(createCountry({ data: formData, dispatch }));
  };

  return (
    <main className='dashboard__users-add-country'>
      <TabContainer title='Create country' showBtn={false}>
        <CreateForm title='Create country' handleSubmit={handleSubmit}>
          <FormInput
            type='text'
            label='Name*'
            name='name'
            required={true}
            setState={setName}
          />
          <FormInput
            type='file'
            label='Flag*'
            name='picture'
            required={true}
            setState={setPicture}
          />
          <FormSelectMultiple
            label='Workspaces*'
            name='workspaces'
            options={options}
            setState={setWorkspaces}
            isMulti={true}
            col='col-[1/3]'
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateCountry;
