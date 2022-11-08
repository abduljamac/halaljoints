import {Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.style';
import Header from '../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

// import {
//   fetchResturants,
//   restaurantsSelector,
// } from '../../shared/store/Restaurants/Restaurants';
import {
  fetchTopRatedRestaurants,
  topRatedSelector,
} from '../../shared/store/TopRated/TopRated';
import {
  fetchHMCertfiedRes,
  HMCertfiedSelector,
} from '../../shared/store/HMCCertified/HMCCertified';

import CusineCategory from '../components/CusineCategory/CusineCategory';
// import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
import Resturants from '../components/Resturants/Resturants';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCuisine, setselectedCuisine] = useState('');

  useEffect(() => {
    // dispatch(fetchResturants());
    dispatch(fetchTopRatedRestaurants());
    dispatch(fetchHMCertfiedRes());
  }, []);

  // const resturants = useSelector(restaurantsSelector);
  const topRatedRes = useSelector(topRatedSelector);
  const HMCertfiedRes = useSelector(HMCertfiedSelector);
  // console.log('resturants: ', JSON.stringify(HMCertfiedRes, null, 2));
  console.log(selectedCuisine);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <ScrollView style={styles.content}>
        <CusineCategory setselectedCuisine={setselectedCuisine} />

        {/* Top Rated */}
        <Resturants items={topRatedRes} title={'Top Rated'} />
        {/* HMC Certfied Resturants */}
        <Resturants items={HMCertfiedRes} title={'HMC Certfied Resturants'} />

        {/* Get Inspired */}
        <Text style={styles.title}>Get Inspired</Text>
        {/* Explore The Area */}
        <Text style={styles.title}>Explore The Area</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
