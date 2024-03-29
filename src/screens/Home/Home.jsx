import { ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.style';
import Header from '../Components/Header/Header';
import Restuarants from '../Components/Restaurants/Restaurants';
import Article from '../Components/Articles/Articles';

import {
  fetchTopRatedRestaurants,
  topRatedRestaurantsSelector,
} from '../../shared/store/TopRated/topRated';
import {
  fetchHMCRestaurants,
  hmcRestaurantsSelector,
} from '../../shared/store/HMCCertified/hmcCertified';
import {
  fetchNearbyRestaurants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/nearbyRestaurants';
import { userLocationSelector } from '../../shared/store/UserLocation/userLocation';

const Home = () => {
  const dispatch = useDispatch();

  const userLocation = useSelector(userLocationSelector);

  useEffect(() => {
    dispatch(fetchNearbyRestaurants());
    dispatch(fetchTopRatedRestaurants());
    dispatch(fetchHMCRestaurants());
  }, [userLocation]);

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
