import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import FormSelectMultiple from '../../components/Admin/Dashboard/Forms/FormSelectMultiple';
import { createChannel } from '../../features/channel/Thunks';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const CreateChannel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'channels',
        boolean: true,
      })
    );
  }, [dispatch]);

  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [picture, setPicture] = useState(null);

  const countryList = useSelector((store) => store.country.countries);
  const options = Object.entries(countryList).map(([key, value]) => {
    return { value: value.name.toLowerCase(), label: value.name };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('countries', JSON.stringify(countries));
    formData.append('picture', picture);

    dispatch(createChannel({ data: formData, dispatch }));
  };

  return (
    <main className='dashboard__users-add-channel'>
      <TabContainer title='Create channel' showBtn={false}>
        <CreateForm title='Create channel' handleSubmit={handleSubmit}>
          <FormInput
            type='text'
            label='Name*'
            name='name'
            required={true}
            setState={setName}
          />
          <FormInput
            type='file'
            label='Logo*'
            name='picture'
            required={true}
            setState={setPicture}
          />
          <FormSelectMultiple
            label='Countries*'
            name='countries'
            options={options}
            setState={setCountries}
            isMulti={true}
            col='col-[1/3]'
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateChannel;
