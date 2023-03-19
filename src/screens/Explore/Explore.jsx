import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Explore = () => {
  const reviews = [
    'The food was amazing!',
    'I loved the ambiance of the restaurant.',
    'The staff were so friendly and helpful.',
    'I will definitely be coming back to Nandos Park Royal.',
    'Best Nandos I have ever been to.',
  ];

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../shared/assets/images/banner/hero.jpg')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.openingTime}>
          Open: Monday-Sunday 12:00pm-10:00pm
        </Text>
        <Text style={styles.reviewsTitle}>Top Reviews:</Text>
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewContainer}>
            <Text style={styles.review}>{review}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  openingTime: {
    fontSize: 18,
    marginBottom: 20,
  },
  reviewsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  reviewContainer: {
    marginBottom: 10,
  },
  review: {
    fontSize: 16,
  }
});

export default Explore;
