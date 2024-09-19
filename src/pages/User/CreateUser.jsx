import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import FormSelect from '../../components/Admin/Dashboard/Forms/FormSelect';
import { createUser } from '../../features/user/Thunks';

const CreateUser = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState(null);
  const [role, setRole] = useState('');

  const user = { firstName, lastName, email, password, picture, role };

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'users',
        boolean: true,
      })
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, picture, role } = user;

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('picture', picture);
    formData.append('role', role);

    dispatch(
      createUser({
        data: formData,
        dispatch,
      })
    );
  };

  return (
    <main className='dashboard__users-add-user'>
      <TabContainer title='Create user' showBtn={false}>
        <CreateForm title='Create user' handleSubmit={handleSubmit}>
          <FormInput
            type='text'
            label='First name*'
            name='firstName'
            required={true}
            setState={setFirstName}
          />
          <FormInput
            type='text'
            label='Last name*'
            name='lastName'
            required={true}
            setState={setLastName}
          />
          <FormInput
            type='email'
            label='Email address*'
            name='email'
            required={true}
            setState={setEmail}
          />
          <FormInput
            type='password'
            label='Password*'
            name='password'
            required={true}
            setState={setPassword}
          />
          <FormInput
            type='file'
            label='Profile picture*'
            name='picture'
            setState={setPicture}
          />
          <FormSelect
            label='Role*'
            name='role'
            required={true}
            isMulti={false}
            setState={setRole}
          >
            <option value=''>Select category*</option>
            <option value='User'>User</option>
            <option value='Administrator'>Administrator</option>
          </FormSelect>
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateUser;
