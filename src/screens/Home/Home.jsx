import { ScrollView, SafeAreaView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.style';
import Header from '../components/Header/Header';
import CusineCategory from '../components/CusineCategory/CusineCategory';
import Restuarants from '../components/Restaurants/Restaurants';
import Article from '../components/Articles/Articles';

import {
  fetchTopRatedResturants,
  topRatedRestaurantsSelector,
} from '../../shared/store/TopRated/TopRated';
import {
  fetchHMCResturants,
  hmcRestaurantsSelector,
} from '../../shared/store/HMCCertified/HMCCertified';
import {
  fetchNearbyResturants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/NearbyRestaurants';

const Home = () => {
  const [selectedCuisine, setselectedCuisine] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNearbyResturants());
    dispatch(fetchTopRatedResturants());
    dispatch(fetchHMCResturants());
    dispatch(fetchNearbyResturants());
  }, []);

  const topRatedResturants = useSelector(topRatedRestaurantsSelector);
  const hmcResturants = useSelector(hmcRestaurantsSelector);
  const nearbyResturants = useSelector(nearbyRestaurantsSelector);

  // console.log('selectedCuisine: ', selectedCuisine);
  // console.log('restaurants: ', JSON.stringify(nearbyResturants, null, 3));

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 60 }}>
        <CusineCategory setselectedCuisine={setselectedCuisine} />

        {/* Nearby */}
        <Restuarants items={nearbyResturants} title={'Nearby'} />
        {/* Top Rated */}
        <Restuarants items={topRatedResturants} title={'Top Rated'} />
        {/* Get Inspired */}
        <Article />
        {/* HMC Certfied Restaurants */}
        <Restuarants items={hmcResturants} title={'HMC Certfied Resturant'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
