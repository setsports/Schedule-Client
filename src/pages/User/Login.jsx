import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Admin/Auth/AuthForm';
import { authUser, checkAuth } from '../../features/user/Thunks';

const Login = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((store) => store.user.status);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      authUser({
        data: user,
        dispatch,
      })
    );
  };

  if (authStatus === undefined || authStatus === 'pending') {
    return <div className='loader'></div>;
  } else if (authStatus === 'rejected') {
    return (
      <main className='dashboard__users-login'>
        <AuthForm
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </main>
    );
  } else {
    window.location.href = '/admin/dashboard';
  }
};

export default Login;
