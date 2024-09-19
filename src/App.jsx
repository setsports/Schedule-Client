import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Client/Layout';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './app/store';
import Login from './pages/User/Login';
import Users from './pages/User/Users';
import DashboardLayout from './components/Admin/Dashboard/DashboardLayout/DashboardLayout';
import CreateUser from './pages/User/CreateUser';
import Account from './pages/User/Account';
import CreateSport from './pages/Sport/CreateSport';
import Sports from './pages/Sport/Sports';
import CreateWorkspace from './pages/Workspace/CreateWorkspace';
import Workspaces from './pages/Workspace/Workspaces';
import CreateCountry from './pages/Country/CreateCountry';
import Countries from './pages/Country/Countries';
import CreateChannel from './pages/Channel/CreateChannel';
import Channels from './pages/Channel/Channels';
import UploadGames from './pages/Game/UploadGames';
import SetWeek from './pages/Week/SetWeek';
import UploadAppGames from './pages/Game/UploadAppGames';
import CreateAppCountry from './pages/Country/CreateAppCountry';
import AppCountries from './pages/Country/AppCountries';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/admin/login' element={<Login />} />

          <Route element={<DashboardLayout />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/dashboard/users' element={<Users />} />
            <Route
              path='/admin/dashboard/users/create'
              element={<CreateUser />}
            />
            <Route
              path='/admin/dashboard/users/account'
              element={<Account />}
            />
            <Route path='/admin/dashboard/sports' element={<Sports />} />
            <Route
              path='/admin/dashboard/sports/create'
              element={<CreateSport />}
            />
            <Route
              path='/admin/dashboard/workspaces'
              element={<Workspaces />}
            />
            <Route
              path='/admin/dashboard/workspaces/create'
              element={<CreateWorkspace />}
            />
            <Route path='/admin/dashboard/countries' element={<Countries />} />
            <Route
              path='/admin/dashboard/countries/app'
              element={<AppCountries />}
            />
            <Route
              path='/admin/dashboard/countries/create'
              element={<CreateCountry />}
            />
            <Route
              path='/admin/dashboard/countries/app/create'
              element={<CreateAppCountry />}
            />
            <Route path='/admin/dashboard/channels' element={<Channels />} />
            <Route
              path='/admin/dashboard/channels/create'
              element={<CreateChannel />}
            />
            <Route
              path='/admin/dashboard/games/upload'
              element={<UploadGames />}
            />
            <Route
              path='/admin/dashboard/games/upload-app'
              element={<UploadAppGames />}
            />
            <Route path='/admin/dashboard/week/set' element={<SetWeek />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
