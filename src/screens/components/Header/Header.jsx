import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Header.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../../shared/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerText2}>
          Find Halal food. <Text style={styles.insideText}> Fast! </Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="search" size={24} />
        <TextInput placeholder="Enter Postcode" style={styles.textInput} />
      </View>
    </View>
  );
};

export default Header;
