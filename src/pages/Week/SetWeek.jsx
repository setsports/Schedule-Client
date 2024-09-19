import { useEffect, useState } from 'react';
import CreateForm from '../../components/Admin/Dashboard/Forms/CreateForm';
import FormInput from '../../components/Admin/Dashboard/Forms/FormInput';
import TabContainer from '../../components/Admin/Dashboard/Tabs/TabContainer';
import { setWeek } from '../../features/week/Thunks';
import { useDispatch } from 'react-redux';
import {
  resetDropdownOpened,
  setDropdownOpened,
} from '../../features/menu/menuSlice';

const SetWeek = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDropdownOpened());
    dispatch(
      setDropdownOpened({
        id: 'week',
        boolean: true,
      })
    );
  }, [dispatch]);

  const [weekStart, setWeekStart] = useState(null);
  const [weekEnd, setWeekEnd] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setWeek({
        start: weekStart,
        end: weekEnd,
      })
    );
  };

  return (
    <main className='dashboard__users-add-week'>
      <TabContainer title='Set week' showBtn={false}>
        <CreateForm title='Set week' handleSubmit={handleSubmit}>
          <FormInput
            label='Week start'
            name='weekStart'
            type='date'
            required={true}
            setState={setWeekStart}
          />
          <FormInput
            label='Week end'
            name='weekEnd'
            type='date'
            required={true}
            setState={setWeekEnd}
          />
        </CreateForm>
      </TabContainer>
    </main>
  );
};

export default SetWeek;
