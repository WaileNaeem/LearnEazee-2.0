import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedLicense: null,
};

const licenseSlice = createSlice({
  name: 'license',
  initialState,
  reducers: {
    setSelectedLicense: (state, action) => {
      state.selectedLicense = action.payload;
      return state;
    },
    resetSelectedLicense: (state, action) => {
      state.selectedLicense = null;
      return state;
    },
  },
});

export const {setSelectedLicense, resetSelectedLicense} = licenseSlice.actions;
export default licenseSlice.reducer;
