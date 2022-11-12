import {StyleSheet} from 'react-native';
import {theme} from '../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: theme.spacing.XSmall,
    padding: theme.spacing.XSmall,
  },
  cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.heading2,
    fontWeight: '700',
    marginHorizontal: theme.spacing.XSmall,
  },
});

export default styles;
