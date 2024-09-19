import { useEffect, useState } from 'react';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { resetDropdownOpened } from '../../features/menu/menuSlice';
import { modifyUser } from '../../features/user/Thunks';

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    dispatch(resetDropdownOpened());
  }, [dispatch]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  const data = {
    firstName,
    lastName,
    email,
    picture,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const changed = Object.entries(data).filter(([key, value]) => value !== '');

    changed.forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (changed.length > 0) {
      dispatch(modifyUser({ data: formData, dispatch }));
    }
  };

  return (
    <main className='dashboard__users-account'>
      <TabContainer title='Account' showBtn={false}>
        <CreateForm title='Save changes' handleSubmit={handleSubmit}>
          <FormInput
            type='text'
            label='First name'
            name='firstName'
            defaultValue={user['firstName']}
            setState={setFirstName}
          />
          <FormInput
            type='text'
            label='Last name'
            name='lastName'
            defaultValue={user['lastName']}
            setState={setLastName}
          />
          <FormInput
            type='email'
            label='Email address'
            name='email'
            disabled={true}
            required={true}
            defaultValue={user['email']}
            setState={setEmail}
          />
          <FormInput
            type='file'
            label='Profile picture*'
            name='picture'
            setState={setPicture}
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default Account;
