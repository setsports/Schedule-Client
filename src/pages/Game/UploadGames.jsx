import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { uploadGames } from '../../features/game/Thunks';
import FormSelect from '../../components/Admin/Dashboard/Forms/FormSelect';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const UploadGames = () => {
  const dispatch = useDispatch();
  const workspaces = useSelector((store) => store.workspace.workspaces);

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'games',
        boolean: true,
      })
    );
  });

  const [file, setFile] = useState(null);
  const [workspace, setWorkspace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('workspace', workspace);
    formData.append('file', file);

    dispatch(uploadGames({ data: formData, dispatch }));
  };

  return (
    <main className='dashboard__users-add-game'>
      <TabContainer title='Upload games' showBtn={false}>
        <CreateForm title='Upload' handleSubmit={handleSubmit}>
          <FormInput
            type='file'
            label='Excel file*'
            name='file'
            required={true}
            setState={setFile}
          />
          <FormSelect
            label='Role*'
            name='role'
            required={true}
            isMulti={false}
            setState={setWorkspace}
          >
            <option value=''>Select workspace*</option>
            {workspaces.map((workspace) => (
              <option value={workspace.name} key={workspace.name}>
                {workspace.name}
              </option>
            ))}
          </FormSelect>
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default UploadGames;
