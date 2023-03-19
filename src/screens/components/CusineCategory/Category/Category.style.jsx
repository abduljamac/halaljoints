import {StyleSheet} from 'react-native';
import {theme} from '../../../../shared/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: theme.spacing.XSmall,
    borderRadius: theme.spacing.medium,
    padding: 5,
  },
  cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: theme.spacing.medium,
  },
  discoverItemTitle: {
    fontSize: theme.fontSizes.smallBody,
    color: theme.colours.black,
    fontWeight: '700',
    paddingTop: 2,
    paddingLeft: 2,
  },
});

export default styles;
