import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import { uploadAppGames } from '../../features/game/Thunks';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const UploadAppGames = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    dispatch(uploadAppGames({ data: formData, dispatch }));
  };

  return (
    <main className='dashboard__users-add-game'>
      <TabContainer title='Upload app games' showBtn={false}>
        <CreateForm title='Upload' handleSubmit={handleSubmit}>
          <FormInput
            props={{
              type: 'file',
              label: 'Excel file*',
              name: 'file',
              required: true,
              setState: setFile,
            }}
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default UploadAppGames;
