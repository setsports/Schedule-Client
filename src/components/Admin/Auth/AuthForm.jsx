import { useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const AuthForm = ({ setEmail, setPassword, handleSubmit }) => {
  const message = useSelector((store) => store.alert.message);
  const { type, messageTxt } = message;

  useEffect(() => {
    type === 'danger'
      ? toast.error(messageTxt)
      : type === 'success'
      ? toast.success(messageTxt)
      : ' ';
  }, [message]);

  return (
    <>
      <div className='auth absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 md:pl-20 md:pr-20 md:pt-10 md:pb-10 rounded-2xl shadow-[0px_1px_2px_rgba(0,0,0,0.08)] w-[90%] md:w-auto'>
        <h2 className='auth__title text-2xl'>Sign in</h2>

        <form
          action=''
          className='auth-form mt-10 flex flex-col gap-5 md:w-[420px]'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='auth-form__input flex flex-col gap-2'>
            <label className='auth-form__input---label text-[#212636]'>
              Email address
            </label>
            <input
              className='border border-[#dcdfe4] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-10 rounded-lg pl-3 pr-3 outline-[#5B4DFB]'
              autoComplete='off'
              type='email'
              name='email'
              id='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='auth-form__input flex flex-col gap-2'>
            <label className='auth-form__input---label text-[#212636]'>
              Password
            </label>
            <input
              className='border border-[#dcdfe4] shadow-[0px_1px_2px_rgba(0,0,0,0.08)] h-10 rounded-lg pl-3 pr-3 outline-[#5B4DFB]'
              autoComplete='off'
              type='password'
              name='password'
              id='password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='auth-form__submit bg-[#5B4DFB] text-white h-10 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.08)]'>
            Sign in
          </button>
        </form>
      </div>
      <Toaster
        position='top-left'
        toastOptions={{
          duration: 1500,
        }}
      />
    </>
  );
};

export default AuthForm;
