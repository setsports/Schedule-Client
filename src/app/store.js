import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import alertReducer from '../features/alert/alertSlice';
import userReducer from '../features/user/userSlice';
import sportReducer from '../features/sport/sportSlice';
import workspaceReducer from '../features/workspace/workspaceSlice';
import countryReducer from '../features/country/countrySlice';
import channelReducer from '../features/channel/channelSlice';
import weekReducer from '../features/week/weekSlice';
import clientReducer from '../features/client/clientSlice';

export default configureStore({
  reducer: {
    menu: menuReducer,
    alert: alertReducer,
    user: userReducer,
    sport: sportReducer,
    workspace: workspaceReducer,
    country: countryReducer,
    channel: channelReducer,
    week: weekReducer,
    client: clientReducer,
  },
});
