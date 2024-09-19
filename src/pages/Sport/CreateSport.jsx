import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { createSport } from '../../features/sport/Thunks';
import FormSelectMultiple from '../../components/Admin/Dashboard/Forms/FormSelectMultiple';

const CreateSport = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'sports',
        boolean: true,
      })
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, platforms };

    dispatch(
      createSport({
        data,
        dispatch,
      })
    );
  };

  return (
    <main className='dashboard__users-add-sport'>
      <TabContainer title='Create sport' showBtn={false}>
        <CreateForm title='Create sport' handleSubmit={handleSubmit}>
          <FormInput
            type='text'
            label='Name*'
            name='name'
            required={true}
            value={name}
            setState={setName}
          />
          <FormSelectMultiple
            label='Platform*'
            name='platform'
            options={[
              { value: 'APP', label: 'APP' },
              { value: 'TV', label: 'TV' },
            ]}
            setState={setPlatforms}
            isMulti={true}
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateSport;
