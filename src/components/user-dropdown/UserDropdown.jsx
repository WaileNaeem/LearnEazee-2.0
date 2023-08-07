import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const UserDropdown = () => {
  const [selecteduser, setSelectedUser] = useState();
  const input = useRef();
  const pickerRef = useRef();
  return (
    <Picker
      selectedValue={selecteduser}
      mode="dropdown"
      prompt="Select A value"
      enabled={true}
      onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue)}>
      <Picker.Item
        label="Select From Sub Users"
        style={styles.labelStyle}
        enabled={false}
      />
      <Picker.Item label="Waile" value="waile" style={styles.dropDownValue} />
      <Picker.Item label="Naeem" value="naeem" style={styles.dropDownValue} />
      <Picker.Item label="Ahmad" value="ahmad" style={styles.dropDownValue} />
    </Picker>
  );
};

export default UserDropdown;
