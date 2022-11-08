import {StyleSheet} from 'react-native';
import {theme} from '../../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: theme.spacing.XSmall,
    backgroundColor: theme.colours.white,
    borderRadius: theme.spacing.medium,
    padding: 5,
  },
  cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: theme.spacing.medium,
  },
  discoverItemTitle: {
    fontSize: 10,
    color: theme.colours.black,
    fontWeight: '700',
    paddingTop: 5,
  },
});

export default styles;
