import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: {
    dashboard: {
      id: 1,
      label: 'Dashboard',
      icon: 'PiHouse',
      link: '/admin/dashboard',
      dropdownOpened: false,
      children: null,
    },
    settings: {
      id: 2,
      label: 'Settings',
      icon: 'CiSettings',
      link: '/admin/dashboard/users/account',
      dropdownOpened: false,
      children: null,
    },
    users: {
      id: 3,
      label: 'Users',
      icon: 'PiUsersThreeLight',
      link: '/admin/dashboard/users',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'List users',
          link: '/admin/dashboard/users',
        },
        {
          id: 2,
          label: 'Create user',
          link: '/admin/dashboard/users/create',
        },
      ],
    },
    sports: {
      id: 4,
      label: 'Sports',
      icon: 'PiFootball',
      link: '/admin/dashboard/sports',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'List sports',
          link: '/admin/dashboard/sports',
        },
        {
          id: 2,
          label: 'Create sport',
          link: '/admin/dashboard/sports/create',
        },
      ],
    },
    workspaces: {
      id: 5,
      label: 'Workspaces',
      icon: 'PiCirclesThreePlus',
      link: '/admin/dashboard/workspaces',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'List workspaces',
          link: '/admin/dashboard/workspaces',
        },
        {
          id: 2,
          label: 'Create workspace',
          link: '/admin/dashboard/workspaces/create',
        },
      ],
    },
    countries: {
      id: 6,
      label: 'Countries',
      icon: 'PiGlobe',
      link: '/admin/dashboard/countries',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'List countries',
          link: '/admin/dashboard/countries',
        },
        {
          id: 1,
          label: 'List app countries',
          link: '/admin/dashboard/countries/app',
        },
        {
          id: 2,
          label: 'Create country',
          link: '/admin/dashboard/countries/create',
        },
        {
          id: 2,
          label: 'Create app country',
          link: '/admin/dashboard/countries/app/create',
        },
      ],
    },
    channels: {
      id: 7,
      label: 'Channels',
      icon: 'PiTelevisionSimple',
      link: '/admin/dashboard/channels',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'List channels',
          link: '/admin/dashboard/channels',
        },
        {
          id: 2,
          label: 'Create channel',
          link: '/admin/dashboard/channels/create',
        },
      ],
    },
    games: {
      id: 8,
      label: 'Games',
      icon: 'MdSportsCricket',
      link: '/admin/dashboard/games',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'Upload games',
          link: '/admin/dashboard/games/upload',
        },
        {
          id: 2,
          label: 'Upload App games',
          link: '/admin/dashboard/games/upload-app',
        },
      ],
    },
    week: {
      id: 9,
      label: 'Week',
      icon: 'PiCalendar',
      link: '/admin/dashboard/week',
      dropdownOpened: false,
      children: [
        {
          id: 1,
          label: 'Set week',
          link: '/admin/dashboard/week/set',
        },
      ],
    },
  },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setDropdownOpened: (state, action) => {
      const { id, boolean } = action.payload;
      state.menuItems[id].dropdownOpened = boolean;
    },
    resetDropdownOpened: (state, action) => {
      Object.entries(state.menuItems).map(
        ([key, value]) => (value.dropdownOpened = false)
      );
    },
  },
});

export const { setDropdownOpened, resetDropdownOpened } = menuSlice.actions;
export default menuSlice.reducer;
