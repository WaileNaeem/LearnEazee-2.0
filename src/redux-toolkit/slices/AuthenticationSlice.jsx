const {createSlice} = require('@reduxjs/toolkit');

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      console.log('waile', state);
      return state;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      console.log(state);
      return state;
    },
  },
});

export const {login, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
