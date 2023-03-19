import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './Header.style';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText2}>
          Find Halal food. <Text style={styles.insideText}> Fast! </Text>
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter Postcode" style={styles.textInput} />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
