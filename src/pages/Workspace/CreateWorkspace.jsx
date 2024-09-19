import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { createWorkspace } from '../../features/workspace/Thunks';

const CreateWorkspace = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'workspaces',
        boolean: true,
      })
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createWorkspace({
        name,
        dispatch,
      })
    );
  };

  return (
    <main className='dashboard__users-add-workspace'>
      <TabContainer title='Create workspace' showBtn={false}>
        <CreateForm title='Create workspace' handleSubmit={handleSubmit}>
          <FormInput
            props={{
              type: 'text',
              label: 'Name*',
              name: 'name',
              required: true,
              value: name,
              setState: setName,
              width: 'w-full',
            }}
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default CreateWorkspace;
