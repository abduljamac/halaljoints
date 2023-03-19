import { ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.style';
import Header from '../components/Header/Header';
import CusineCategory from '../components/CusineCategory/CusineCategory';
import {
  fetchResturants,
  restaurantsSelector,
} from '../../shared/store/Restaurants/Restaurants';

const Home = () => {
  const [selectedCuisine, setselectedCuisine] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResturants());
  }, []);

  // const resturants = useSelector(restaurantsSelector);

  // console.log('resturants: ', JSON.stringify(resturants, null, 2));

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <CusineCategory setselectedCuisine={setselectedCuisine} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
