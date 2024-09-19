import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { createAppCountry, createCountry } from '../../features/country/Thunks';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const CreateAppCountry = () => {
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
  const [picture, setPicture] = useState(null);
  const [gmt, setGmt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('picture', picture);
    formData.append('gmt', gmt);

    dispatch(createAppCountry({ data: formData, dispatch }));
  };

  return (
    <main className='dashboard__users-add-country'>
      <TabContainer title='Create app country' showBtn={false}>
        <CreateForm title='Create app country' handleSubmit={handleSubmit}>
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
          <FormInput
            type='text'
            label='GMT*'
            name='gmt'
            required={true}
            setState={setGmt}
            col='col-[1/3]'
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateAppCountry;
