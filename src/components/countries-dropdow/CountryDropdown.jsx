import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/font-family';
DropDownPicker.setListMode('SCROLLVIEW');

const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'United State', value: 'United State'},
    {label: 'Australia', value: 'Australia'},
    {label: 'Newzeland', value: 'Newzeland'},
    {label: 'Malaysia', value: 'Malaysia'},
    {label: 'Portugal', value: 'Portugal'},
    {label: 'Pakistan ', value: 'Pakistan'},
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      disableBorderRadius={true}
      style={{
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey3,
        borderRadius: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderColor: COLORS.grey3,
      }}
      textStyle={{
        color: COLORS.grey1,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTS.Avenir,
      }}
      dropDownContainerStyle={{
        backgroundColor: COLORS.white1,
        borderRadius: 0,
      }}
      placeholder="Country/Region"
      placeholderStyle={{
        color: COLORS.grey1,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FONTS.Avenir,
      }}
    />
  );
};

export default CountryDropdown;
