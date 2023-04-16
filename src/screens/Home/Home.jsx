import { ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.style';
import Header from '../components/Header/Header';
import Restuarants from '../components/Restaurants/Restaurants';
import Article from '../components/Articles/Articles';

import {
  fetchTopRatedRestaurants,
  topRatedRestaurantsSelector,
} from '../../shared/store/TopRated/TopRated';
import {
  fetchHMCRestaurants,
  hmcRestaurantsSelector,
} from '../../shared/store/HMCCertified/HMCCertified';
import {
  fetchNearbyRestaurants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/NearbyRestaurants';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNearbyRestaurants());
    dispatch(fetchTopRatedRestaurants());
    dispatch(fetchHMCRestaurants());
    dispatch(fetchNearbyRestaurants());
  }, []);

  const topRatedRestaurants = useSelector(
    useMemo(() => topRatedRestaurantsSelector, []),
  );
  const hmcRestaurants = useSelector(useMemo(() => hmcRestaurantsSelector, []));
  const nearbyRestaurants = useSelector(
    useMemo(() => nearbyRestaurantsSelector, []),
  );

  const renderArticle = useCallback(() => {
    if (!topRatedRestaurants.loading) {
      return <Article />;
    }
    return null;
  }, [topRatedRestaurants.loading]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Nearby */}
        <Restuarants
          items={nearbyRestaurants}
          title={'Nearby'}
          showAll={true}
        />

        {/* Get Inspired */}
        {renderArticle()}

        {/* Top Rated */}
        <Restuarants
          items={topRatedRestaurants}
          title={'Top Rated'}
          showAll={true}
        />

        {/* HMC Certfied Restaurants */}
        <Restuarants
          items={hmcRestaurants}
          title={'HMC Certfied Resturant'}
          showAll={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
