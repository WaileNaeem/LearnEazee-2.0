import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedLicense} from '../../redux-toolkit/slices/LicensceSeatsSlice';

const DropDown = () => {
  const selectedLicense = useSelector(state => state.license.selectedLicense);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1 Seat License', value: 1},
    {label: '2 Seats License', value: 2},
    {label: '3 Seats License', value: 3},
    {label: '4 Seats License', value: 4},
    {label: '5 Seats License', value: 5},
  ]);

  const handleValueChange = itemValue => {
    setValue(itemValue);
    dispatch(setSelectedLicense(itemValue));
  };
  return (
    <DropDownPicker
      open={open}
      value={selectedLicense}
      items={items}
      setOpen={setOpen}
      setValue={handleValueChange}
      setItems={setItems}
      disableBorderRadius={true}
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 0,
      }}
      textStyle={{
        color: COLORS.grey1,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTS.Avenir,
      }}
      dropDownContainerStyle={{backgroundColor: COLORS.white, borderRadius: 0}}
      placeholder="Select seats of license"
      placeholderStyle={{
        color: COLORS.grey1,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTS.Avenir,
      }}
    />
  );
};

export default DropDown;
